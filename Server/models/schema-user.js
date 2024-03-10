const mongoose = require("mongoose");
// Schame user
const Schema = require("mongoose").Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = (module.exports = mongoose.model("Users", UserSchema));

module.exports = User;
