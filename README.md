# Authentication & Test System - Backend

## Overview

Express.js backend for MCQ test system with user authentication.

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt.js
- Joi Validation

## Prerequisites

- Node.js (v18+)
- MongoDB

## Dependencies

- Express
- Mongoose
- JSON Web Token (JWT)
- bcrypt.js
- Cors
- Dotenv
- Joi

## Project Structure

```
backend/
├── config/
│   ├── db.js           # Database connection
│   └── config.js       # Configuration variables
├── controllers/
│   ├── authController.js     # User authentication logic
│   ├── testController.js     # Test management logic
│   └── feedbackController.js # Feedback handling
├── middleware/
│   ├── authMiddleware.js     # JWT authentication middleware
│   └── errorMiddleware.js    # Error handling middleware
├── models/
│   ├── userModel.js          # User schema
│   ├── questionModel.js      # Test questions schema
│   ├── testResultModel.js    # Test results schema
│   └── feedbackModel.js      # Feedback schema
├── routes/
│   ├── authRoutes.js         # Authentication routes
│   ├── testRoutes.js         # Test related routes
│   └── feedbackRoutes.js     # Feedback routes
├── utils/
│   ├── jwtUtils.js           # JWT token generation and verification
│   └── passwordUtils.js      # Password hashing utilities
├── validation/
│   └── validationSchemas.js  # Input validation schemas
├── .env                      # Environment variables
├── server.js                 # Entry point
└── package.json              # Dependencies
```

## Setup

1. Clone the repository

```bash
git clone <git repostory link>
cd <Cloned folder name>
```

2. Install dependencies

```bash
npm install
```

3. Create `.env` file

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/testdb
JWT_SECRET=your_secret_key
```

## Available Scripts

```bash
# Start production server
npm start

# Start development server with nodemon
npm run dev

# Run database seeder
npm run seed
```

## API Endpoints

- `/api/auth`: Authentication routes
- `/api/test`: Test-related routes
- `/api/feedback`: Feedback routes

## Key Features

- User Authentication
- JWT-based Authorization
- Error Handling Middleware
- CORS Configuration
- Database Connection
- Route Management

## Error Handling

- Custom Error Middleware
- 404 Route Not Found Handler
