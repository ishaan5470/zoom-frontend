const express = require("express");
const router = express.Router();

const messageController = require("../controller/messageController");

router.post("/", messageController.addNewMessage);
router.get("/:conversationId", messageController.getMessage);

module.exports = router;
