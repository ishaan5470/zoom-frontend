const express = require("express");
const resumeController = require("../controllers/resumeController");

const router = express.Router();

router.post(
  "/postresumedata",
  resumeController.uploadUserPhoto,
  resumeController.resizeUserPhoto,
  resumeController.createResume
);
router.post("/postResume", resumeController.postresume);
router.post("/resumeImage", resumeController.resumeImage);
router.get("/", resumeController.getResumes);
router.get("/:id", resumeController.getResumeData);
router.delete("/deleteall", resumeController.deleteAllResumes);

module.exports = router;