const Conversation = require("../model/Conversation");
const User = require("../model/user");

//new conversation
module.exports.newConversation = async (req, res) => {
  try {
    // Ensure all members exist as User in the databse
    const existingUserOne = await User.findById(req.body.senderId);
    const existingUserTwo = await User.findById(req.body.receiverId);
    if (existingUserOne && existingUserTwo) {
      return res
        .status(400)
        .json({
          error: "Invalid participant(s) or Conversation already exists",
        });
    }
    const newConversation = new Conversation({
      members: [req.body.senderId, req.body.receiverId],
    });
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json("Failed to create a conversation");
  }
};

//get conv of a user
module.exports.getConversationOfUser = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get conv includes two userId
module.exports.getConversationUsingIds = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};
