const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
  if (!req.cookies || !req.cookies.jwt) {
    return res.status(403).send({ message: 'Access denied: No token provided' });
  }

  const token = req.cookies.jwt;

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: 'Access denied: Invalid token' });
    }

    if (!decoded.admin) {
      return res.status(403).send({ message: 'Access denied: Admins only' });
    }

    next();
  });
};

module.exports = isAdmin;
