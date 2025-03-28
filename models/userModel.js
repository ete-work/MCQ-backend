const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/config");

// User Schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email id required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email",
    ],
  },
  mobileNumber: {
    type: String,
    required: [true, "Mobile number is required"],
    unique: true,
    trim: true,
    match: [/^\+\d{1,3}[6-9]\d{9}$/, "Invalid mobile number"],
  },
  password: {
    type: String,
    required: [true, "Password is required"], // ✅ Added missing password field
  },
  status: {
    type: String,
    required: [true, "Current status is required"],
    enum: ["Student", "Employee"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving to DB
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const saltRounds = config.SALT_ROUNDS || 10; // Default salt rounds
    const salt = await bcrypt.genSalt(saltRounds);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    console.error("Error hashing password:", error);
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  if (!this.password) {
    throw new Error("Password is not set for this user");
  }
  return await bcrypt.compare(candidatePassword, this.password);
};

// Create User model
const User = mongoose.model("User", userSchema);
module.exports = User;
