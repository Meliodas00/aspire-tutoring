// server/scheduler/monthlyInvoices.js
//
// Runs every hour. On the 1st of the month, at TARGET_HOUR, it renders every
// invoice to PDF and emails them all as attachments to the business inbox,
// using Resend.
//
// Why "every hour, but gated to one hour" instead of just firing on date===1:
// a plain "if today is the 1st, send" check run every hour would fire 24
// times that day. Gating to a single hour makes it effectively once-a-day,
// while still satisfying "check every hour".

const cron = require('node-cron');
const { Resend } = require('resend');
const puppeteer = require('puppeteer');

const invoiceDocument = require('../emails/invoiceDocument');
const { business, invoices } = require('../data/invoiceData');

const TARGET_HOUR = 9; // 24hr clock — change to whatever hour you want it sent
const RECIPIENT = process.env.INVOICE_RECIPIENT || business.email; // where all invoices get sent

// ---------------------------------------------------------------------------
// Resend client — reads the API key from the environment.
// Never hardcode the real key in this file.
// ---------------------------------------------------------------------------
const resend = new Resend(process.env.RESEND_API_KEY);

// ---------------------------------------------------------------------------
// Render one invoice record to a PDF buffer using the existing HTML template.
// ---------------------------------------------------------------------------
async function renderInvoicePdf(browser, invoiceRecord) {
  const html = invoiceDocument({
    business,
    parent: invoiceRecord.parent,
    invoice: invoiceRecord.invoice
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
  await page.close();

  return pdfBuffer;
}

// ---------------------------------------------------------------------------
// Generate every invoice as a PDF, then send them all as attachments to you.
// ---------------------------------------------------------------------------
async function sendAllInvoices() {
  const invoiceNumbers = Object.keys(invoices);

  if (invoiceNumbers.length === 0) {
    console.log('[monthlyInvoices] No invoices to send.');
    return;
  }

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const attachments = [];

    for (const invoiceNumber of invoiceNumbers) {
      const record = invoices[invoiceNumber];

      try {
        const pdfBuffer = await renderInvoicePdf(browser, record);
        attachments.push({
          filename: `${invoiceNumber}.pdf`,
          // Resend expects attachment content as base64 (or a Buffer, which
          // it base64-encodes internally depending on SDK version) — base64
          // string is the safest bet across versions.
          content: pdfBuffer.toString('base64')
        });
      } catch (err) {
        console.error(`[monthlyInvoices] Failed to render ${invoiceNumber}:`, err);
        // Continue rendering the rest rather than aborting the whole run.
      }
    }

    if (attachments.length === 0) {
      console.warn('[monthlyInvoices] No invoices rendered successfully — nothing sent.');
      return;
    }

    const { data, error } = await resend.emails.send({
      from: business.email,
      to: RECIPIENT,
      subject: `Monthly Invoices — ${new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}`,
      text: `Attached are ${attachments.length} invoice(s) for this month.`,
      attachments
    });

    if (error) {
      console.error('[monthlyInvoices] Resend returned an error:', error);
      return;
    }

    console.log(`[monthlyInvoices] Sent ${attachments.length} invoice(s) to ${RECIPIENT}. Resend id: ${data?.id}`);
  } finally {
    await browser.close();
  }
}

// ---------------------------------------------------------------------------
// Cron: runs at the top of every hour, only acts on the 1st at TARGET_HOUR.
// ---------------------------------------------------------------------------
function startMonthlyInvoiceScheduler() {
  cron.schedule('0 * * * *', async () => {
    const now = new Date();
    const isFirstOfMonth = now.getDate() === 1;
    const isTargetHour = now.getHours() === TARGET_HOUR;

    console.log(`[monthlyInvoices] Hourly check — ${now.toISOString()}`);

    if (isFirstOfMonth && isTargetHour) {
      console.log('[monthlyInvoices] Conditions met — sending invoices.');
      await sendAllInvoices();
    }
  });

  console.log('[monthlyInvoices] Scheduler started — checking every hour.');
}

module.exports = { startMonthlyInvoiceScheduler, sendAllInvoices };