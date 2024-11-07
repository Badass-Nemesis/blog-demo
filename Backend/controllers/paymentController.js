const db = require('../db');

// process a payment (dummy)
const processPayment = (req, res) => {
  const { payments_user_id, amount, paymentMethod } = req.body;

  /*
    // not created payments table
    const query = 'INSERT INTO payments (payments_user_id, amount, payment_method) VALUES (?, ?, ?)';
    
    db.execute(query, [payments_user_id, amount, paymentMethod], (err, result) => {
      if (err) {
        console.error('Error processing payment:', err);
        res.status(500).send({ message: 'Error processing payment' });
      } else {
        res.status(200).send({ message: 'Payment processed successfully' });
      }
    });
    */

    res.status(200).send({ message: 'Payment processed successfully' });
};

// get payment options (dummy)
const getPaymentOptions = (req, res) => {
  const paymentOptions = [
    { method: 'Credit Card', description: 'Pay with credit card' },
    { method: 'Debit Card', description: 'Pay with debit card' },
    { method: 'UPI', description: 'Pay with UPI' },
  ];

  res.status(200).send(paymentOptions);
};

module.exports = { processPayment, getPaymentOptions };
