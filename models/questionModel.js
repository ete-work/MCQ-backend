const mongoose = require("mongoose");

const optionsSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
});

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [optionsSchema],
  marks: {
    type: Number,
    default: 5,
  },
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
