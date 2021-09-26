const jwt = require("jsonwebtoken");

const auth = async function (req, res, next) {
  try {
    let token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return res.status(403).send("Access denied!");
    }
    //Throws error if not ok
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(400).send("Access Denied, Invalid Token!");
  }
};

module.exports = auth;
