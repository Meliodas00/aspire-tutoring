const invoiceDocument = ({business, parent, invoice}) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
<title>Invoice ${invoice.invoiceNumber}</title>

<style>
    @page {
        size: A4;
        margin: 0;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background: #f2f4f7;
        color: #1f2937;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        line-height: 1.5;
    }

    .page {
        width: 210mm;
        min-height: 297mm;
        margin: 20px auto;
        padding: 18mm 18mm 15mm 18mm;
        background: #ffffff;
        position: relative;
    }

    /* Header */

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 35px;
    }

    .business-name {
        font-size: 28px;
        font-weight: 700;
        color: #111827;
        margin: 0 0 4px 0;
    }

    .business-subtitle {
        color: #6b7280;
        font-size: 14px;
        margin: 0;
    }

    .invoice-title {
        text-align: right;
    }

    .invoice-title h1 {
        font-size: 36px;
        margin: 0;
        color: #111827;
        letter-spacing: 1px;
    }

    .invoice-number {
        margin-top: 5px;
        color: #6b7280;
        font-size: 13px;
    }

    /* Information boxes */

    .information {
        display: flex;
        justify-content: space-between;
        gap: 40px;
        margin-bottom: 35px;
    }

    .information-section {
        width: 50%;
    }

    .information-section.right {
        text-align: right;
    }

    .information-label {
        color: #6b7280;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        margin-bottom: 6px;
    }

    .information-name {
        font-weight: 700;
        font-size: 15px;
        color: #111827;
        margin-bottom: 3px;
    }

    .information p {
        margin: 2px 0;
        color: #4b5563;
    }

    /* Dates */

    .dates {
        display: flex;
        justify-content: flex-end;
        gap: 35px;
        margin-bottom: 35px;
    }

    .date-box {
        text-align: right;
    }

    .date-label {
        display: block;
        color: #6b7280;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.7px;
    }

    .date-value {
        display: block;
        margin-top: 3px;
        font-weight: 600;
        color: #111827;
    }

    /* Invoice table */

    .items {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
    }

    .items thead {
        background: #111827;
        color: #ffffff;
    }

    .items th {
        padding: 11px 12px;
        text-align: left;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .items th.right,
    .items td.right {
        text-align: right;
    }

    .items th.center,
    .items td.center {
        text-align: center;
    }

    .items td {
        padding: 12px;
        border-bottom: 1px solid #e5e7eb;
        vertical-align: top;
    }

    .items tbody tr:nth-child(even) {
        background: #f9fafb;
    }

    .student-name {
        font-weight: 700;
        color: #111827;
    }

    .description {
        color: #374151;
    }

    .item-date {
        color: #6b7280;
        font-size: 12px;
        margin-top: 2px;
    }

    /* Totals */

    .totals-container {
        display: flex;
        justify-content: flex-end;
        margin-top: 25px;
    }

    .totals {
        width: 280px;
    }

    .total-row {
        display: flex;
        justify-content: space-between;
        padding: 7px 0;
        color: #4b5563;
    }

    .total-row.discount {
        color: #059669;
    }

    .total-row.final {
        border-top: 2px solid #111827;
        margin-top: 8px;
        padding-top: 12px;
        color: #111827;
        font-size: 19px;
        font-weight: 700;
    }

    /* Payment information */

    .payment-section {
        margin-top: 45px;
        padding: 18px;
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
    }

    .payment-section h3 {
        margin: 0 0 8px 0;
        font-size: 14px;
        color: #111827;
    }

    .payment-section p {
        margin: 3px 0;
        color: #4b5563;
    }

    /* Notes */

    .notes {
        margin-top: 30px;
    }

    .notes h3 {
        margin: 0 0 6px 0;
        font-size: 13px;
        color: #111827;
    }

    .notes p {
        margin: 0;
        color: #6b7280;
    }

    /* Footer */

    .footer {
        position: absolute;
        left: 18mm;
        right: 18mm;
        bottom: 12mm;
        padding-top: 10px;
        border-top: 1px solid #e5e7eb;
        text-align: center;
        color: #9ca3af;
        font-size: 11px;
    }

    /* Prevent table rows splitting across PDF pages */

    tr {
        page-break-inside: avoid;
    }

    /* Print */

    @media print {
        body {
            background: #ffffff;
        }

        .page {
            margin: 0;
            box-shadow: none;
        }
    }
</style>


</head>

<body>

<div class="page">


<!-- =========================================================
     HEADER
     ========================================================= -->

<div class="header">

    <div>
        <h2 class="business-name">
            ${business.name}
        </h2>

        <p class="business-subtitle">
            ${business.tagline}
        </p>
    </div>

    <div class="invoice-title">
        <h1>INVOICE</h1>

        <div class="invoice-number">
            ${invoice.invoiceNumber}
        </div>
    </div>

</div>


<!-- =========================================================
     BILL TO / BUSINESS DETAILS
     ========================================================= -->

<div class="information">

    <div class="information-section">

        <div class="information-label">
            Bill To
        </div>

        <div class="information-name">
            ${parent.name}
        </div>

        ${parent.address ? `<p>${parent.address}</p>` : ''}

        ${parent.email ? `<p>${parent.email}</p>` : ''}

        ${parent.phone ? `<p>${parent.phone}</p>` : ''}

    </div>


    <div class="information-section right">

        <div class="information-label">
            From
        </div>

        <div class="information-name">
            ${business.name}
        </div>

        ${business.address ? `<p>${business.address}</p>` : ''}

        ${business.email ? `<p>${business.email}</p>` : ''}

        ${business.phone ? `<p>${business.phone}</p>` : ''}

    </div>

</div>


<!-- =========================================================
     INVOICE DATES
     ========================================================= -->

<div class="dates">

    <div class="date-box">
        <span class="date-label">
            Issue Date
        </span>

        <span class="date-value">
            ${invoice.issueDate}
        </span>
    </div>

    <div class="date-box">
        <span class="date-label">
            Due Date
        </span>

        <span class="date-value">
            ${invoice.dueDate}
        </span>
    </div>

</div>


<!-- =========================================================
     INVOICE ITEMS
     ========================================================= -->

<table class="items">

    <thead>
        <tr>
            <th>
                Date
            </th>

            <th>
                Student
            </th>

            <th>
                Description
            </th>

            <th class="center">
                Hours
            </th>

            <th class="right">
                Rate
            </th>

            <th class="right">
                Amount
            </th>
        </tr>
    </thead>

    <tbody>

        ${invoice.items && invoice.items.length > 0 ? invoice.items.map(item => `

                <tr>

                    <td>
                        ${item.date}
                    </td>

                    <td>
                        <div class="student-name">
                            ${item.studentName}
                        </div>
                    </td>

                    <td>
                        <div class="description">
                            ${item.description}
                        </div>

                        ${item.notes ? `<div class="item-date">${item.notes}</div>` : ''}
                    </td>

                    <td class="center">
                        ${item.quantity}
                    </td>

                    <td class="right">
                        £${Number(item.unitPrice).toFixed(2)}
                    </td>

                    <td class="right">
                        £${Number(item.total).toFixed(2)}
                    </td>

                </tr>

        `).join('') : `

            <tr>
                <td colspan="6" style="text-align: center; color: #6b7280;">
                    No invoice items.
                </td>
            </tr>

        `}

    </tbody>

</table>


<!-- =========================================================
     TOTALS
     ========================================================= -->

<div class="totals-container">

    <div class="totals">

        <div class="total-row">

            <span>
                Subtotal
            </span>

            <span>
                £${Number(invoice.subtotal).toFixed(2)}
            </span>

        </div>


        ${invoice.discount && Number(invoice.discount) > 0 ? `

            <div class="total-row discount">

                <span>
                    Discount
                </span>

                <span>
                    -£${Number(invoice.discount).toFixed(2)}
                </span>

            </div>

        ` : ''}


        <div class="total-row final">

            <span>
                Total Due
            </span>

            <span>
                £${Number(invoice.total).toFixed(2)}
            </span>

        </div>

    </div>

</div>


<!-- =========================================================
     PAYMENT INFORMATION
     ========================================================= -->

<div class="payment-section">

    <h3>
        Payment Information
    </h3>

    ${business.paymentName ? `
        <p>
            <strong>Account Name:</strong>
            ${business.paymentName}
        </p>
    ` : ''}

    ${business.sortCode ? `
        <p>
            <strong>Sort Code:</strong>
            ${business.sortCode}
        </p>
    ` : ''}

    ${business.accountNumber ? `
        <p>
            <strong>Account Number:</strong>
            ${business.accountNumber}
        </p>
    ` : ''}

    <p>
        <strong>Payment Reference:</strong>
        ${invoice.invoiceNumber}
    </p>

    <p style="margin-top: 10px;">
        Please use the invoice number as your payment reference.
    </p>

</div>


<!-- =========================================================
     NOTES
     ========================================================= -->

${invoice.notes ? `

    <div class="notes">

        <h3>
            Notes
        </h3>

        <p>
            ${invoice.notes}
        </p>

    </div>

` : ''}


<!-- =========================================================
     FOOTER
     ========================================================= -->

<div class="footer">

    ${business.name}

    ${business.website ? ` &nbsp; • &nbsp; ${business.website}` : ''}

    ${business.email ? ` &nbsp; • &nbsp; ${business.email}` : ''}

</div>
</div>
</body>
</html>


`;

module.exports = invoiceDocument;