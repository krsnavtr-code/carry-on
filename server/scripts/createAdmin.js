import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "../models/User.js";

dotenv.config();

const createAdmin = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: "admin@carry-on.in" });
    if (existingAdmin) {
      console.log("Admin user already exists!");
      process.exit(0);
    }

    // Create admin user
    const admin = await User.create({
      name: "Admin User",
      email: "admin@carry-on.in",
      password: "admin123", // Will be hashed automatically
      role: "admin",
      isVerified: true,
    });

    console.log("Admin user created successfully!");
    console.log("Email: admin@carry-on.in");
    console.log("Password: admin123");
    console.log("PLEASE CHANGE THE PASSWORD AFTER FIRST LOGIN!");

    process.exit(0);
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();
