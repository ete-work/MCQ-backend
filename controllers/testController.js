const Question = require("../models/questionModel");
const TestResult = require("../models/testResultModel");
const { testSubmissionSchema } = require("../validation/validationSchemas");

// @desc    Get random test questions
// @route   GET /api/test/questions
// @access  Private
const getQuestions = async (req, res) => {
  try {
    // Get 5 random questions from the database
    const questions = await Question.aggregate([
      { $sample: { size: 10 } },
      {
        $project: {
          question: 1,
          options: {
            $map: {
              input: "$options",
              as: "option",
              in: {
                text: "$$option.text",
                _id: "$$option._id",
              },
            },
          },
        },
      },
    ]);

    if (questions.length === 0) {
      return res.status(404).json({ message: "No questions found" });
    }

    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Submitting the test and creating test results
// @route POST /api/test/submit
// @access Private
const submitTest = async (req, res) => {
  try {

    const { error } = testSubmissionSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const answers = req.body.answers;

    if (!Array.isArray(answers)) {
      return res.status(400).json({
        message: "Invalid data format. Expected an array of answers.",
      });
    }

    const userId = req.user._id;
    let totalMarks = 0;
    const processedAnswers = [];

    for (const answer of answers) {
      const question = await Question.findById(answer.questionId);

      if (!question) {
        return res
          .status(404)
          .json({ message: `Question with id ${answer.questionId} not found` });
      }

      const selectedOption = question.options.find(
        (option) => option._id.toString() === answer.selectedOption
      );
      const isCorrect = selectedOption && selectedOption.isCorrect;

      processedAnswers.push({
        questionId: question._id,
        selectedOption: answer.selectedOption,
        isCorrect,
      });

      if (isCorrect) {
        totalMarks += question.marks;
      }
    }

    const testResult = await TestResult.create({
      user: userId,
      answers: processedAnswers,
      totalMarks,
    });

    res.status(201).json({
      testResultId: testResult._id,
      totalMarks,
      totalQuestions: answers.length,
      marksPerQuestion: 5,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Getting test results
// @route   GET /api/test/result/:id
// @access  Private
const getTestResult = async (req, res) => {
  try {
    const testResult = await TestResult.findById(req.params.id)
      .populate("user", "fullName email")
      .populate({
        path: "answers.questionId",
        select: "question options",
      });

    if (!testResult) {
      return res.status(404).json({ message: "Test result not found" });
    }

    // Check if the test belongs to the requesting user
    if (testResult.user._id.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to access this test result" });
    }

    res.json(testResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getQuestions, submitTest, getTestResult };
