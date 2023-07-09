// REQUIRING MODULES
const mongoose = require("mongoose");

// DECLARE THE SCHEMA OF THE MONGO MODEL
const instantJobScehma = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
      required: true,
    },
    State: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    workDescription: {
      type: String,
      required: true,
    },
    candidatesRequired: {
      type: Number,
      required: true,
    },
    Date: {
      type: String,
      required: true,
    },
    Country: {
      type: Number,
      required: true,
    },
    expireAt: {
      type: Date,
      default: new Date(new Date().valueOf() + 259200000),
      expires: 10800,
    },
  },
  {
    timestamps: true,
  }
);

// EXPORT THE MODULE
const InstantJob = mongoose.model("InstantJob", instantJobScehma);
module.exports = InstantJob;
