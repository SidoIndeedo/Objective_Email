const jwt = require('jsonwebtoken');

function jwtAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.SESSION_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {

    return res.status(403).json({ error: 'Invalid token', err });
  }
}

module.exports = jwtAuth;
