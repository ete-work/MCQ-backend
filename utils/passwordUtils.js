const bcrypt = require("bcryptjs");
const config = require("../config/config");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(config.SALT_ROUNDS);
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (enteredPassword, storedPassword) => {
  return await bcrypt.compare(enteredPassword, storedPassword);
};

module.exports = { hashPassword, comparePassword };
