const express = require("express");
const {
  togglePinQuestion,
  updateQuestionNote,
  addQuestionsToSession,
} = require("../controllers/questionController.controller");
const { protect } = require("../middlewares/authMiddleware.middleware");

const router = express.Router();

// Question Routes
router.post("/add", protect, addQuestionsToSession);
router.post("/:id/pin", protect, togglePinQuestion);
router.post("/:id/note", protect, updateQuestionNote);

module.exports = router;
