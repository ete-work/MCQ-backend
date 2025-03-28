// seeder.js - Script to seed sample questions
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Question = require("./models/questionModel");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Sample questions data
const questions = [
  {
    question: "What is the primary purpose of React.js?",
    options: [
      { text: "Server-side rendering", isCorrect: false },
      { text: "Building user interfaces", isCorrect: true },
      { text: "Database management", isCorrect: false },
      { text: "API development", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "Which of the following is NOT a hook in React?",
    options: [
      { text: "useState", isCorrect: false },
      { text: "useEffect", isCorrect: false },
      { text: "useQuery", isCorrect: true },
      { text: "useContext", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "What does JWT stand for?",
    options: [
      { text: "JavaScript Web Token", isCorrect: false },
      { text: "JSON Web Token", isCorrect: true },
      { text: "JSON With Types", isCorrect: false },
      { text: "JavaScript With Types", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "Which database is NoSQL?",
    options: [
      { text: "MySQL", isCorrect: false },
      { text: "PostgreSQL", isCorrect: false },
      { text: "MongoDB", isCorrect: true },
      { text: "Oracle", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "What is Express.js?",
    options: [
      { text: "A frontend framework", isCorrect: false },
      { text: "A Node.js web application framework", isCorrect: true },
      { text: "A database", isCorrect: false },
      { text: "A testing library", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "Which of the following is used for CSS-in-JS?",
    options: [
      { text: "Bootstrap", isCorrect: false },
      { text: "Tailwind CSS", isCorrect: false },
      { text: "Styled Components", isCorrect: true },
      { text: "SASS", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "What does CORS stand for?",
    options: [
      { text: "Cross-Origin Resource Sharing", isCorrect: true },
      { text: "Create Object Resource System", isCorrect: false },
      { text: "Cross-Object Response System", isCorrect: false },
      { text: "Create Origin Response Service", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "Which HTTP method is used to retrieve data from a server?",
    options: [
      { text: "POST", isCorrect: false },
      { text: "PUT", isCorrect: false },
      { text: "GET", isCorrect: true },
      { text: "DELETE", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "Which language runs in a web browser?",
    options: [
      { text: "Java", isCorrect: false },
      { text: "C++", isCorrect: false },
      { text: "Python", isCorrect: false },
      { text: "JavaScript", isCorrect: true },
    ],
    marks: 5,
  },
  {
    question: "Which protocol is used for secure data transfer over the web?",
    options: [
      { text: "HTTP", isCorrect: false },
      { text: "HTTPS", isCorrect: true },
      { text: "FTP", isCorrect: false },
      { text: "TCP", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "What does REST stand for?",
    options: [
      { text: "Representational State Transfer", isCorrect: true },
      { text: "Remote Execution System Technology", isCorrect: false },
      { text: "Real-time Event Streaming", isCorrect: false },
      {
        text: "Resource Encapsulation and Structuring Technique",
        isCorrect: false,
      },
    ],
    marks: 5,
  },
  {
    question: "Which JavaScript framework is developed by Facebook?",
    options: [
      { text: "Angular", isCorrect: false },
      { text: "Vue.js", isCorrect: false },
      { text: "React", isCorrect: true },
      { text: "Svelte", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "Which of these is a relational database?",
    options: [
      { text: "MongoDB", isCorrect: false },
      { text: "Redis", isCorrect: false },
      { text: "MySQL", isCorrect: true },
      { text: "Neo4j", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "Which HTTP status code indicates 'Not Found'?",
    options: [
      { text: "200", isCorrect: false },
      { text: "301", isCorrect: false },
      { text: "404", isCorrect: true },
      { text: "500", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "Which of the following is a NoSQL database?",
    options: [
      { text: "MySQL", isCorrect: false },
      { text: "PostgreSQL", isCorrect: false },
      { text: "MongoDB", isCorrect: true },
      { text: "SQLite", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question:
      "Which keyword is used to declare a constant variable in JavaScript?",
    options: [
      { text: "var", isCorrect: false },
      { text: "let", isCorrect: false },
      { text: "const", isCorrect: true },
      { text: "static", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "What does SQL stand for?",
    options: [
      { text: "Structured Query Language", isCorrect: true },
      { text: "Simple Query Language", isCorrect: false },
      { text: "Secure Question Language", isCorrect: false },
      { text: "System Query Logic", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "Which JavaScript function is used to parse JSON data?",
    options: [
      { text: "JSON.parse()", isCorrect: true },
      { text: "parseJSON()", isCorrect: false },
      { text: "stringifyJSON()", isCorrect: false },
      { text: "JSON.stringify()", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question:
      "What is the default HTTP method used when submitting an HTML form?",
    options: [
      { text: "GET", isCorrect: true },
      { text: "POST", isCorrect: false },
      { text: "PUT", isCorrect: false },
      { text: "DELETE", isCorrect: false },
    ],
    marks: 5,
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: [
      { text: "==", isCorrect: false },
      { text: "===", isCorrect: true },
      { text: "!=", isCorrect: false },
      { text: "!==", isCorrect: false },
    ],
    marks: 5,
  },
];

// Seed data
const importData = async () => {
  try {
    await Question.deleteMany(); // Clear existing data
    await Question.insertMany(questions); // Insert new data

    console.log("Data imported successfully");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Run the seeder
importData();
