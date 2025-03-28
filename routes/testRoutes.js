const express = require("express");
const {
  getQuestions,
  submitTest,
  getTestResult,
} = require("../controllers/testController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/questions", protect, getQuestions);
router.post("/submit", protect, submitTest);
router.get("/result/:id", protect, getTestResult);

module.exports = router;
