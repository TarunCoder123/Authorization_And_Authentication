const jwt = require("jsonwebtoken");
const {secretKey} = require("../configuration/jwtConfig");

function authenticateToken(req, res, next) {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized: Missing token!" });
  }
  const [bearer, token] = authHeader.split(" ");
  if (bearer !== "Bearer" || !token) {
    return res.status(401).json({ message: "Unathorizad: Invalid token format" });
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (!err && user) {
      req.user = user;
      next();
    } else {
      return res.status(403).json({ err: err, message: "Forbidden: Invalid Token" });
    }
  });
}

module.exports = { authenticateToken };
