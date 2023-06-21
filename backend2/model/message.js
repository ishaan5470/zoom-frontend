const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Message", MessageSchema);

/*============================
   OLD CODE
==============================*/
/*const { Schema, model } = require('mongoose');

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

const Message = model('Message', messageSchema);

module.exports = Message;
*/
