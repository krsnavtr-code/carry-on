import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import dns from "dns";
import connectDB from "./config/db.js";
import { bookingRoutes } from "./routes/bookingRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

// Only set DNS in development/local environment
if (process.env.NODE_ENV !== "production") {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
}

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

// Booking Routes
app.use("/api", bookingRoutes);

// Auth Routes
app.use("/api/auth", authRoutes);

// Port configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`,
  );
});
