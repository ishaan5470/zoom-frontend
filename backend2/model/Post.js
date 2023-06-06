// REQUIRING MODULES
const mongoose = require("mongoose");

// DECLARE THE SCHEMA OF THE MONGO MODEL
const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    skillsRequired: {
      type: Array,
      default: [],
    },
    workDescription: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
    },
    expireAt: {
      type: Date,
      default: new Date(new Date().valueOf() + 3888000000),
      expires: 60,
    },
  },
  {
    timestamps: true
  }
);

// EXPORT THE MODULE
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
