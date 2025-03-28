const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  testResult: {
    type: mongoose.Schema.ObjectId,
    ref: "TestResult",
    required: true,
  },
  emoji: {
    type: String,
    required: true,
    enum: ["🥵", "😔", "😐", "😌", "🥰"],
  },
  comments: {
    type: String,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
