const { Schema, Model } = require('mongoose');

const messageSchema = new Schema(
  {
    message: {
      type: String,
    },
    users: Array,
    sender: {
      type: String,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = Model('Message', messageSchema);

module.exports = Message;
