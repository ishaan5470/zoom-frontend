const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userprofile = new schema({
  userid: { type: String },

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
  profile: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  skills: [{ type: String }],
  highestQualification: {
    type: String,
    default: "",
  },
  followers: [{ type: String }],
  following: [{ type: String }],
  requests: [{ type: String }],
  private: {
    type: Boolean,
    default: false,
  },
  chats: [
    {
      roomno: String,
      userprofileId: String,
    },
  ],
  location: {
    type: String,
  },

  // education
  degree: {
    type: String,
  },
  college: {
    type: String,
  },
  stream: {
    type: String,
  },
});
const UserProfile = mongoose.model("UserProfile", userprofile);
module.exports = UserProfile;
