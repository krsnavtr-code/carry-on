import express from "express";
import { sendBookingEmail } from "../controllers/bookingController.js";

const router = express.Router();

// POST /api/booking - Send booking emails
router.post("/booking", sendBookingEmail);

export { router as bookingRoutes };
