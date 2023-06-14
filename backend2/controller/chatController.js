const Message = require('../model/message');

/* @desc    Add a message
 * @route   POST /messages/add
 * @param   message, from, to
 */
const addMessage = async (req, res) => {
  const { message, from, to } = req.body;

  try {
    console.log(req.body);

    const response = await Message.create({
      message,
      users: [from, to],
      sender: from,
    });

    console.log(response);

    if (response) {
      res.json({
        status: true,
        message: 'Message sent successfully',
        response,
      });
    } else {
      res.json({ status: false, message: 'Message not sent' });
    }
  } catch (error) {
    res.json({ status: false, message: 'Some error occured', error });
  }
};

/*
 * @desc    Get all messages
 * @route   POST /messages
 * @param   from, to
 */
const getAllMessages = async (req, res) => {
  const { from, to } = req.body;
  console.log(req.body);

  try {
    // To get the message in ascending order (oldest first)
    const response = await Message.find({
      users: { $all: [from, to] },
    }).sort({ createdAt: 1 });

    if (response) {
      const classifiedResponse = response.map((message) => {
        return {
          message: message.message,
          self: message.sender.toString() === from.toString(),
        };
      });

      res.json({
        status: true,
        message: 'Messages fetched successfully',
        allMessages: classifiedResponse,
      });
    } else {
      res.json({ status: false, message: 'Messages not fetched' });
    }
  } catch (error) {
    res.json({ status: false, message: 'Some error occured', error });
  }

  res.json({ message: 'getAllMessages Controller', data: req.body });
};

module.exports = {
  addMessage,
  getAllMessages,
};
