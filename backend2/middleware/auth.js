// REQUIRING MODULES
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization") || req.cookies.token;

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// EXPORT THE MODULE
module.exports = verifyToken;
