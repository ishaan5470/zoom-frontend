const Message = require("../model/Message");
const Conversation = require("../model/Conversation");

// Add new message to a particular conversation id
module.exports.addNewMessage = async (req, res) => {
  const newMessage = new Message({
    conversationId: req.body.conversationId,
    sender: req.body.sender,
    text: req.body.text,
  });

  try {
    // Ensure the conversation exists
    const existingConversation = await Conversation.findById(
      req.body.conversationId
    );
    if (!existingConversation) {
      return res.status(400).json({ error: "Invalid conversation" });
    }

    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get all messages belonging to particular consersation id
module.exports.getMessage = async (req, res) => {
  try {
    /*const messages = await Message.find({
      conversationId: req.params.conversationId,
    });*/
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json("Failed to retrieve messages", err);
  }
};
