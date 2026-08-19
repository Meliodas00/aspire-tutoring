require('dotenv').config();

const { sendAllInvoices } = require('../scheduler/monthlyInvoices');

sendAllInvoices()
  .then(() => {
    console.log('Test run complete.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Test run failed:', err);
    process.exit(1);
  });



