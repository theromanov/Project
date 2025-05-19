// server/src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token provided' });

  const [_, token] = auth.split(' ');
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;   // { userId, username }
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};
