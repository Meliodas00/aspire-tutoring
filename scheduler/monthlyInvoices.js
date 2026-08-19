const cron = require('node-cron');
const { Resend } = require('resend');
const puppeteer = require('puppeteer');

const invoiceDocument = require('../emails/invoiceDocument');
const { business, invoices } = require('../data/invoiceData');

const TARGET_HOUR = 9; // 24hr 
const RECIPIENT = process.env.INVOICE_RECIPIENT || business.email; // where all invoices get sent


const resend = new Resend(process.env.RESEND_API_KEY);


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
          content: pdfBuffer.toString('base64')
        });
      } catch (err) {
        console.error(`[monthlyInvoices] Failed to render ${invoiceNumber}:`, err);
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