const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(403).send({ message: 'Access denied: No token provided' });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: 'Access denied: Invalid token' });
    }

    if (decoded.username !== 'admin') {
      return res.status(403).send({ message: 'Access denied: Admins only' });
    }

    next();
  });
};

module.exports = isAdmin;
