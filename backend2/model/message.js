const { Schema, Model } = require('mongoose');

const messageSchema = new Schema(
  {
    message: {
      type: String,
    },
    // [from, to] = [sender, receiver] ---> [_id sender, _id receiver]
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
