const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
require("colors");

// Create app
const app = express();

// Middleware
app.use(express.json({ extended: false }));

// Needs security implemented

// Connect to DB
// connectDB();

// Routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`.yellow.bold)
);
