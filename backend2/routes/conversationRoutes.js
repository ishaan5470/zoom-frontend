const express = require("express");
const router = express.Router();

const conversationController = require("../controller/conversationController");

router.post("/", conversationController.newConversation);
router.get("/:userId", conversationController.getConversationOfUser);
router.get("/find/:firstUserId/:secondUserId",conversationController.getConversationUsingIds);

module.exports = router;
