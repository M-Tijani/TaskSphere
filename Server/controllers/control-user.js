// Password InCryption
const bcrypt = require("bcrypt");
const saltRounds = 10;
// Token
const jwt = require("jsonwebtoken");
// Schema
const User = require("../models/schema-user");
// ENV Config
require("dotenv").config();

const GetUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const CreateUser = async (req, res) => {
  const user = new User(req.body);
  try {
    // Check if the filds are empty
    if (!user.username) {
      return res.status(400).json({ message: "Please fill username" });
    } else if (!user.email) {
      return res.status(400).json({ message: "Please fill email" });
    } else if (!user.password) {
      return res.status(400).json({ message: "Please fill password" });
    }
    user.password = await bcrypt.hash(user.password, saltRounds);

    const checkpoint = await User.findOne({ email: user.email });
    if (checkpoint) {
      res.status(400).json({ emailExists: "Email already exists" });
      return;
    } else {
      const newUser = await user.save();
      return res.status(201).json({
        message: "User created successfully",
        newUser: newUser,
      });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const LoginWithUser = async (req, res) => {
  const { username, password, email } = req.body;
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
          expiresIn: "10d",
        });
        res.cookie("token", token, { httpOnly: true });
        res.status(200).json({
          message: "Login Successful",
          email: email,
          token: token,
        });
      } else {
        res.status(400).json({ message: "Invalid Password" });
      }
    } else {
      res.status(400).json({ message: "Invalid Email or Username" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const UpdateUser = async (req, res) => {
  const id = req.params.id;
  const user = req.body;
  try {
    user.password = await bcrypt.hash(user.password, saltRounds);
    const updatedUser = await User.findByIdAndUpdate(id, user, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const DeleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    // CHECK USER  IF IT"S IN DATA B ASE
    const userid = await User.findById(id);
    if (!userid) {
      res.status(404).json({ message: "User Not Found" });
      return;
    }
    // DELETE USER
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  GetUsers,
  CreateUser,
  LoginWithUser,
  UpdateUser,
  DeleteUser,
};
