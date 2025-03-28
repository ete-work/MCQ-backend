require("dotenv").config(); // Ensure dotenv is loaded if using .env file

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || "your_default_secret", // Default value for testing
  JWT_EXPIRE: process.env.JWT_EXPIRE || "24h",
  SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS, 10) || 10,
};
