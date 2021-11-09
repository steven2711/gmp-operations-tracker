const express = require("express");
const db = require("./connection/db");
require("dotenv").config();
require("colors");
const cors = require("cors");
// Create app
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Needs security implemented

// Connect to DB
db();

// Routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`.yellow.bold)
);
