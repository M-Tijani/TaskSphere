// Password InCryption
const bcrypt = require("bcrypt");
// Token
const jwt = require("jsonwebtoken");
// Schema
const User = require("../models/schema-user");
// ENV Config
require("dotenv").config();

const LoginWithUser = async (req, res, next) => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne({ email: email });
    // Check if the filds are empty
    if (!password) {
      return res.status(400).json({ message: "Please fill password" });
    } else if (!email) {
      return res.status(400).json({ message: "Please fill email" });
    }
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        req.session.token = token;
        res.status(200).json({
          message: "Login Successful",
          token: token,
        });
        next();
      } else {
        res.status(400).json({ message: "Invalid Password" });
      }
    } else {
      res.status(400).json({ message: "Invalid Email or Password" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { LoginWithUser };
