const monoogse = require("mongoose");

const answerSchema = new monoogse.Schema({
  questionId: {
    type: monoogse.Schema.ObjectId,
    ref: "Question",
    required: true,
  },
  selectedOption: {
    type: monoogse.Schema.ObjectId,
    ref: "Option",
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
});

const testResultSchema = new monoogse.Schema({
  user: {
    type: monoogse.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  answers: [answerSchema],
  totalMarks: {
    type: Number,
    required: true,
  },
  completedAt: {
    type: Date,
    default: Date.now,
  },
});

const TestResult = monoogse.model("TestResult", testResultSchema);
module.exports = TestResult;
