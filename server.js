const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorMiddleware = require("./middleware/errorMiddleware");

// Importing Routes
const auhtRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

//Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

//Middleware
const url = "https://mcq-frontend-bice.vercel.app";
console.log("Using CORS Allowed Origin:", `"${url}"`);

app.use(
  cors({
    origin: url, // ✅ Now it won't include trailing spaces/commas
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

//Setting Routes
app.use("/api/auth", auhtRoutes);
app.use("/api/test", testRoutes);
app.use("/api/feedback", feedbackRoutes);

//Error handler
app.use(errorMiddleware);

//404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
