const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();
const connectDB = require("./config/db");

// Connect to Database
connectDB();

const app = express();

// Middlewares
app.use(express.json()); // Body parser for JSON data
app.use(cors()); // Allow cross-origin requests
app.use(helmet()); // Secure HTTP headers
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); // Log requests in terminal
}

// Base Route Test
app.get("/", (req, res) => {
  res.json({ message: "Carry-On API running successfully!" });
});

// Port configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`,
  );
});
