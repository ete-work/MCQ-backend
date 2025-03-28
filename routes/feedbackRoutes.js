const express = require("express");
const {
  submitFeedback,
  getFeedbackByTestResult,
} = require("../controllers/feedbackController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, submitFeedback);
router.get("/:testResultId", protect, getFeedbackByTestResult);

module.exports = router;
