const db = require('../db');

const isAdmin = (req, res, next) => {
  const userId = req.body.userId || req.params.id; // how should I pass the userID?
  
  const query = 'SELECT admin FROM users WHERE id = ?';
  
  db.execute(query, [userId], (err, results) => {
    if (err) {
      console.error('Error verifying admin status:', err);
      res.status(500).send({ message: 'Error verifying admin status' });
    } else if (results.length === 0 || results[0].admin === 0) {
      res.status(403).send({ message: 'Access denied: Admins only' });
    } else {
      next();
    }
  });
};

module.exports = isAdmin;
