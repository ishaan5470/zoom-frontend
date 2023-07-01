const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  userName: {
    type: String,
    unique: true,
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  Company: {
    type: Boolean,
    required: true,
    default: false,
  },
  is_verified_email: {
    type: Boolean,
    default: false,
  },
  is_verified_phone: {
    type: Boolean,
    default: false,
  },
  phoneOtp: {
    type: String,
  },
  email: {
    type: String,
  },
  profilePic: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
