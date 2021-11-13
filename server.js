const express = require("express");
const db = require("./connection/db");
require("dotenv").config();
require("colors");
const morgan = require("morgan");
const cors = require("cors");

// Create app
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Dev logging middleware //
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Needs security implemented

// Connect to DB
db();

// Routes
app.use("/api/v1/users", require("./routes/users"));
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/ingredients", require("./routes/ingredients"));
app.use("/api/v1/scale-calibrations", require("./routes/scale-calibrations"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder

  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`.yellow.bold)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // Close server and exit process.
  server.close(() => process.exit(1));
});
