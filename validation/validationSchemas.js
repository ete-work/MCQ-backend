const Joi = require("joi");

const registerSchema = Joi.object({
  fullName: Joi.string().required().trim(),
  email: Joi.string().required().trim(),
  mobileNumber: Joi.string()
    .pattern(/^\+\d{1,3}[6-9]\d{9}$/)
    .required()
    .trim()
    .messages({
      "string.pattern.base()": "Mobile number must be a 10 digit number",
    }),
  status: Joi.string().valid("Student", "Employee").required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  mobileNumber: Joi.string()
    .pattern(/^\+\d{1,3}[6-9]\d{9}$/)
    .required(),
  password: Joi.string().required(),
});

const testSubmissionSchema = Joi.object({
  answers: Joi.array()
    .items(
      Joi.object({
        questionId: Joi.string().required(),
        selectedOption: Joi.string().required(),
      })
    )
    .min(5)
    .required(),
});

const feedbackSchema = Joi.object({
  testResultId: Joi.string().required(),
  emoji: Joi.string().valid("🥵", "😔", "😐", "😌", "🥰").required(),
  comments: Joi.string().allow("", null),
});

module.exports = {
  registerSchema,
  loginSchema,
  testSubmissionSchema,
  feedbackSchema,
};
