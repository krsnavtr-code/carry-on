import nodemailer from "nodemailer";

// Create transporter using Hostinger SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587, // Standard SMTP port
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  });
};

// Send booking emails to both owner and client
export const sendBookingEmail = async (req, res) => {
  try {
    const { cc, subject, body, selectedVehicle } = req.body;
    const ownerEmail = process.env.OWNER_EMAIL;

    if (!ownerEmail || !cc || !subject || !body) {
      return res.status(400).json({
        success: false,
        message: "Missing required email fields",
      });
    }

    const transporter = createTransporter();

    // Email to Owner
    const ownerMailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: ownerEmail,
      subject: subject,
      html: generateOwnerEmailHTML(body, selectedVehicle),
    };

    // Email to Client
    const clientMailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: cc,
      subject: `Booking Confirmation - ${body.name}`,
      html: generateClientEmailHTML(body, selectedVehicle),
    };

    // Send both emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(clientMailOptions);

    res.status(200).json({
      success: true,
      message: "Booking emails sent successfully",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send booking emails",
      error: error.message,
    });
  }
};

// Generate HTML for Owner Email
const generateOwnerEmailHTML = (data, selectedVehicle) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Booking Request - Carry-On Car Rental</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0C4587 0%, #5EBC23 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .header h1 { margin: 0; font-size: 28px; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .section { margin-bottom: 20px; }
        .section h2 { color: #0C4587; margin-top: 0; border-bottom: 2px solid #5EBC23; padding-bottom: 10px; }
        .info-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
        .info-label { font-weight: bold; color: #666; }
        .info-value { color: #333; }
        .vehicle-info { background: #e8f4f8; padding: 15px; border-radius: 5px; margin-top: 15px; }
        .cta-button { display: inline-block; background: #0C4587; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚗 New Booking Request</h1>
          <p>Carry-On Car Rental Pvt Ltd</p>
        </div>
        <div class="content">
          <div class="section">
            <h2>Customer Information</h2>
            <div class="info-row">
              <span class="info-label">Name:</span>
              <span class="info-value">${data.name}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Email:</span>
              <span class="info-value">${data.email}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Phone:</span>
              <span class="info-value">${data.phone}</span>
            </div>
          </div>

          ${
            selectedVehicle
              ? `
          <div class="vehicle-info">
            <strong>Selected Vehicle:</strong> ${selectedVehicle}
          </div>
          `
              : ""
          }

          <div class="section">
            <h2>Location Details</h2>
            <div class="info-row">
              <span class="info-label">Pickup Location:</span>
              <span class="info-value">${data.pickupLocation}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Dropoff Location:</span>
              <span class="info-value">${data.dropoffLocation}</span>
            </div>
          </div>

          <div class="section">
            <h2>Schedule</h2>
            <div class="info-row">
              <span class="info-label">Pickup Date:</span>
              <span class="info-value">${data.fromDate}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Pickup Time:</span>
              <span class="info-value">${data.fromTime}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Return Date:</span>
              <span class="info-value">${data.untilDate}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Return Time:</span>
              <span class="info-value">${data.untilTime}</span>
            </div>
          </div>

          <div class="section">
            <p style="color: #666; font-size: 14px;">
              Please review this booking request and contact the customer to confirm availability and finalize the booking.
            </p>
          </div>
        </div>
        <div class="footer">
          <p>&copy; 2026 Carry-On Car Rental Pvt Ltd. All rights reserved.</p>
          <p>Contact: connect@carry-on.in | Phone: +91 83830 17006</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Generate HTML for Client Email
const generateClientEmailHTML = (data, selectedVehicle) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Booking Confirmation - Carry-On Car Rental</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0C4587 0%, #5EBC23 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .header h1 { margin: 0; font-size: 28px; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .section { margin-bottom: 20px; }
        .section h2 { color: #0C4587; margin-top: 0; border-bottom: 2px solid #5EBC23; padding-bottom: 10px; }
        .info-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
        .info-label { font-weight: bold; color: #666; }
        .info-value { color: #333; }
        .vehicle-info { background: #e8f4f8; padding: 15px; border-radius: 5px; margin-top: 15px; }
        .success-box { background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin-bottom: 20px; border-left: 4px solid #28a745; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Booking Request Received</h1>
          <p>Carry-On Car Rental Pvt Ltd</p>
        </div>
        <div class="content">
          <div class="success-box">
            <strong>Thank you, ${data.name}!</strong><br>
            Your booking request has been successfully submitted. Our team will contact you shortly to confirm availability and finalize your reservation.
          </div>

          <div class="section">
            <h2>Your Booking Details</h2>
            <div class="info-row">
              <span class="info-label">Booking Reference:</span>
              <span class="info-value">COR-${Date.now().toString().slice(-6)}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Customer Name:</span>
              <span class="info-value">${data.name}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Email:</span>
              <span class="info-value">${data.email}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Phone:</span>
              <span class="info-value">${data.phone}</span>
            </div>
          </div>

          ${
            selectedVehicle
              ? `
          <div class="vehicle-info">
            <strong>Selected Vehicle:</strong> ${selectedVehicle}
          </div>
          `
              : ""
          }

          <div class="section">
            <h2>Pickup & Dropoff</h2>
            <div class="info-row">
              <span class="info-label">Pickup Location:</span>
              <span class="info-value">${data.pickupLocation}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Dropoff Location:</span>
              <span class="info-value">${data.dropoffLocation}</span>
            </div>
          </div>

          <div class="section">
            <h2>Rental Period</h2>
            <div class="info-row">
              <span class="info-label">From:</span>
              <span class="info-value">${data.fromDate} at ${data.fromTime}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Until:</span>
              <span class="info-value">${data.untilDate} at ${data.untilTime}</span>
            </div>
          </div>

          <div class="section">
            <h2>Next Steps</h2>
            <ul style="color: #666; font-size: 14px;">
              <li>Our team will review your booking request</li>
              <li>You will receive a confirmation call within 24 hours</li>
              <li>Payment details will be shared upon confirmation</li>
              <li>Please keep your ID proof ready for verification</li>
            </ul>
          </div>
        </div>
        <div class="footer">
          <p>&copy; 2026 Carry-On Car Rental Pvt Ltd. All rights reserved.</p>
          <p>Contact: connect@carry-on.in | Phone: +91 83830 17006</p>
          <p>Location: H-213, 3rd Floor Sector-63 Noida 201301</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
