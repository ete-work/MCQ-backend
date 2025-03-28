const jwt = require("jsonwebtoken");
const config = require("../config/config");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  let token;

  const bearer = req.headers.authorization;

  if (bearer && bearer.startsWith("Bearer")) {
    try {
      token = bearer.split(" ")[1];

      const decoded = jwt.verify(token, config.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log("Error in auhtMiddleware/protect", error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect };
