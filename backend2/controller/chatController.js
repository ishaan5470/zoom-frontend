const addMessage = async (req, res) => {
  console.log(req.body);
  res.json({ message: 'addMessage Controller' });
};

const getAllMessages = async (req, res) => {
  console.log(req.body);
  res.json({ message: 'getAllMessages Controller' });
};

module.exports = {
  addMessage,
  getAllMessages,
};
