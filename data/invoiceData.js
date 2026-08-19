const invoices = {
  "INV-2026-001": {
    parent: {
      name: "Jane Smith",
      address: "123 Example Street, Winchester, SO23 1AB",
      email: "jane@example.com",
      phone: "07700 900001"
    },
    invoice: {
      invoiceNumber: "INV-2026-001",
      issueDate: "19 August 2026",
      dueDate: "2 September 2026",
      subtotal: 135,
      discount: 0,
      total: 135,
      notes: "Thank you for choosing Zenith Tuition.",
      items: [
        { date: "1 August 2026", studentName: "John Smith", description: "GCSE English Tuition", notes: "English Literature", quantity: 1, unitPrice: 45, total: 45 },
        { date: "8 August 2026", studentName: "John Smith", description: "GCSE English Tuition", notes: "English Language", quantity: 1, unitPrice: 45, total: 45 },
        { date: "15 August 2026", studentName: "John Smith", description: "GCSE English Tuition", notes: "", quantity: 1, unitPrice: 45, total: 45 }
      ]
    }
  },

  "INV-2026-002": {
    parent: {
      name: "David Lee",
      address: "45 Sample Road, Winchester, SO22 4CD",
      email: "david@example.com",
      phone: "07700 900002"
    },
    invoice: {
      invoiceNumber: "INV-2026-002",
      issueDate: "19 August 2026",
      dueDate: "2 September 2026",
      subtotal: 90,
      discount: 0,
      total: 90,
      notes: "",
      items: [
        { date: "5 August 2026", studentName: "Amy Lee", description: "GCSE Maths Tuition", notes: "", quantity: 2, unitPrice: 45, total: 90 }
      ]
    }
  }
};

const business = {

        name: "Sam Lester",
        tagline: "Private Music Tuition",
        address: "Winchester, Hampshire",
        email: "sam.lester125@gmail.com",
        phone: "07485007782",
        website: "www.zenithtuition.com",
        paymentName: "Samuel Lester",
        sortCode: "07-04-36",
        accountNumber: "17317171"

};


module.exports = { business, invoices };