const router = require('express').Router();

const { addMessage, getAllMessages } = require('../controllers/chatController');

router.post('/add', addMessage);
router.post('/', getAllMessages);

module.exports = router;
