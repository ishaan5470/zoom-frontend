const router = require('express').Router();

const { addMessage, getAllMessages } = require('../controller/chatController');

router.post('/add', addMessage);
router.post('/', getAllMessages);

module.exports = router;
