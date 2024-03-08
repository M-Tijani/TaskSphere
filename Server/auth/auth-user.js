const jwt = require("jsonwebtoken");
const User = require("../models/schema-user");
require("dotenv").config();

const auth = async (req, res, next) => {
  const auth = req.headers.authorization;
  console.log(auth);
  if (!auth) {
    return res.status(401).json({ error: "Access denied" });
  }

  const token = auth.split(" ")[1];
  console.log(token);
  try {
    // Check user id in dababase

    const { _id } = jwt.verify(token, process.env.JWT_SECRET);

    console.log(_id);
    req.userId = await User.findById(_id).select("_id");
    if (!req.userId) {
      return res.status(401).json({ error: "Access denied" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = auth;
