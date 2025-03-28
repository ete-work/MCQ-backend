const Feedback = require("../models/feedbackModel");
const TestResult = require("../models/testResultModel");
const { feedbackSchema } = require("../validation/validationSchemas");

// @desc    Submit feedback
// @route   POST /api/feedback
// @access  Private
const submitFeedback = async (req, res) => {
  try {
    // Validate request body
    const { error } = feedbackSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { testResultId, emoji, comments } = req.body;
    const userId = req.user._id;

    // Verify test result exists and belongs to user
    const testResult = await TestResult.findById(testResultId);

    if (!testResult) {
      return res.status(404).json({ message: "Test result not found" });
    }

    if (testResult.user.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to submit feedback for this test" });
    }

    // Check if feedback already exists
    const existingFeedback = await Feedback.findOne({
      testResult: testResultId,
    });

    if (existingFeedback) {
      return res
        .status(400)
        .json({ message: "Feedback already submitted for this test" });
    }

    // Create feedback
    const feedback = await Feedback.create({
      user: userId,
      testResult: testResultId,
      emoji,
      comments,
    });

    res.status(201).json({
      _id: feedback._id,
      emoji: feedback.emoji,
      comments: feedback.comments,
      submittedAt: feedback.submittedAt,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get feedback by test result ID
// @route   GET /api/feedback/:testResultId
// @access  Private
const getFeedbackByTestResult = async (req, res) => {
  try {
    const testResultId = req.params.testResultId;
    const userId = req.user._id;

    // Verify test result exists and belongs to user
    const testResult = await TestResult.findById(testResultId);

    if (!testResult) {
      return res.status(404).json({ message: "Test result not found" });
    }

    if (testResult.user.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to access this feedback" });
    }

    // Get feedback
    const feedback = await Feedback.findOne({ testResult: testResultId });

    if (!feedback) {
      return res
        .status(404)
        .json({ message: "Feedback not found for this test" });
    }

    res.json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { submitFeedback, getFeedbackByTestResult };
