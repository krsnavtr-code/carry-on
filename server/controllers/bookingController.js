import nodemailer from "nodemailer";

// Create transporter using Outlook/Office 365 SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
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

// ==========================================
// 1. GENERATE HTML FOR OWNER EMAIL (Admin View)
// ==========================================
const generateOwnerEmailHTML = (data, selectedVehicle) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Booking Request</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f7f6; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
      
      <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0C4587 0%, #0A3C73 100%); padding: 40px 30px; text-align: center; border-bottom: 5px solid #5EBC23;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px;">🚨 New Booking Alert</h1>
          <p style="color: #aed2ff; margin: 10px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">Carry-On Operations Desk</p>
        </div>

        <!-- Content -->
        <div style="padding: 30px;">
          
          <div style="background-color: #f8fafc; border-left: 4px solid #0C4587; padding: 15px 20px; border-radius: 0 8px 8px 0; margin-bottom: 25px;">
            <p style="margin: 0; color: #334155; font-size: 15px;"><strong>Action Required:</strong> A new reservation request has been initiated by <strong>${data.name}</strong>.</p>
          </div>

          <!-- Customer Details -->
          <h2 style="color: #0C4587; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">👤 Client Profile</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px dashed #e2e8f0; color: #64748b; font-size: 14px; width: 40%;">Full Name</td>
              <td style="padding: 10px 0; border-bottom: 1px dashed #e2e8f0; color: #0f172a; font-size: 14px; font-weight: 600; text-align: right;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px dashed #e2e8f0; color: #64748b; font-size: 14px;">Contact Network</td>
              <td style="padding: 10px 0; border-bottom: 1px dashed #e2e8f0; color: #0f172a; font-size: 14px; font-weight: 600; text-align: right;">
                <a href="tel:${data.phone}" style="color: #0C4587; text-decoration: none;">${data.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Email Node</td>
              <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 600; text-align: right;">
                <a href="mailto:${data.email}" style="color: #0C4587; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
          </table>

          ${
            selectedVehicle
              ? `
          <!-- Vehicle -->
          <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px; border-radius: 12px; margin-bottom: 25px; text-align: center;">
            <p style="margin: 0; color: #166534; font-size: 12px; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Target Fleet Asset</p>
            <h3 style="margin: 8px 0 0 0; color: #15803d; font-size: 20px; font-weight: 900;">🚘 ${selectedVehicle}</h3>
          </div>
          `
              : ""
          }

          <!-- Route & Schedule -->
          <h2 style="color: #0C4587; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">📍 Transit Logistics</h2>
          <table style="width: 100%; border-collapse: collapse; background-color: #f8fafc; border-radius: 8px; overflow: hidden;">
            <tr>
              <td style="padding: 15px; border-bottom: 1px solid #e2e8f0; width: 50%; vertical-align: top;">
                <span style="display: block; font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: bold; margin-bottom: 4px;">🟢 Pickup Node</span>
                <strong style="color: #0f172a; font-size: 14px; display: block; margin-bottom: 4px;">${data.pickupLocation}</strong>
                <span style="color: #0C4587; font-size: 13px;">${data.fromDate} @ ${data.fromTime}</span>
              </td>
              <td style="padding: 15px; border-bottom: 1px solid #e2e8f0; width: 50%; vertical-align: top; border-left: 1px solid #e2e8f0;">
                <span style="display: block; font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: bold; margin-bottom: 4px;">🔴 Dropoff Node</span>
                <strong style="color: #0f172a; font-size: 14px; display: block; margin-bottom: 4px;">${data.dropoffLocation}</strong>
                <span style="color: #d97706; font-size: 13px;">${data.untilDate} @ ${data.untilTime}</span>
              </td>
            </tr>
          </table>

          <div style="text-align: center; margin-top: 35px;">
            <a href="tel:${data.phone}" style="display: inline-block; background-color: #5EBC23; color: #ffffff; font-weight: bold; text-decoration: none; padding: 14px 30px; border-radius: 8px; font-size: 15px; letter-spacing: 0.5px;">Call Client to Confirm</a>
          </div>

        </div>

        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 25px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0; color: #94a3b8; font-size: 12px;">System Generated Dispatch Email</p>
          <p style="margin: 5px 0 0 0; color: #64748b; font-size: 12px; font-weight: bold;">Carry-On Car Rental Pvt Ltd.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// ==========================================
// 2. GENERATE HTML FOR CLIENT EMAIL (Customer View)
// ==========================================
const generateClientEmailHTML = (data, selectedVehicle) => {
  const referenceNumber = `COR-${Date.now().toString().slice(-6)}`;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Booking Request Received</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f7f6; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
      
      <!-- Preheader (Hidden text for email clients) -->
      <div style="display: none; max-height: 0px; overflow: hidden;">Thank you for choosing Carry-On! We have received your car rental booking request.</div>

      <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0C4587 0%, #0A3C73 100%); padding: 40px 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 900; letter-spacing: -0.5px;">Booking Received!</h1>
          <p style="color: #aed2ff; margin: 10px 0 0 0; font-size: 14px; letter-spacing: 1px;">CARRY-ON CAR RENTAL</p>
        </div>

        <!-- Success Banner -->
        <div style="background-color: #5EBC23; padding: 12px; text-align: center;">
          <p style="color: #ffffff; margin: 0; font-size: 13px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">✅ Request Successfully Logged</p>
        </div>

        <!-- Content -->
        <div style="padding: 35px 30px;">
          
          <h2 style="margin: 0 0 15px 0; color: #0f172a; font-size: 20px;">Hello ${data.name},</h2>
          <p style="margin: 0 0 25px 0; color: #475569; font-size: 15px; line-height: 1.6;">
            Thank you for choosing Carry-On. We have received your booking details and our fleet operations team is currently reviewing availability.
          </p>

          <!-- Booking Summary Box -->
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
            
            <div style="text-align: center; margin-bottom: 20px;">
              <span style="font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Reference ID</span>
              <div style="font-size: 22px; font-family: monospace; font-weight: bold; color: #0C4587; margin-top: 5px; letter-spacing: 2px;">${referenceNumber}</div>
            </div>

            ${
              selectedVehicle
                ? `
            <div style="border-top: 1px dashed #cbd5e1; border-bottom: 1px dashed #cbd5e1; padding: 15px 0; margin-bottom: 20px; text-align: center;">
              <span style="font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Selected Fleet Asset</span>
              <div style="font-size: 18px; font-weight: 800; color: #0f172a; margin-top: 5px;">${selectedVehicle}</div>
            </div>
            `
                : ""
            }

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; width: 50%; vertical-align: top;">
                  <span style="display: block; font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: bold;">Pickup</span>
                  <strong style="color: #0f172a; font-size: 14px; display: block; margin: 4px 0;">${data.pickupLocation}</strong>
                  <span style="color: #5EBC23; font-size: 13px; font-weight: bold;">${data.fromDate} @ ${data.fromTime}</span>
                </td>
                <td style="padding: 10px 0; width: 50%; vertical-align: top; border-left: 1px solid #e2e8f0; padding-left: 15px;">
                  <span style="display: block; font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: bold;">Dropoff</span>
                  <strong style="color: #0f172a; font-size: 14px; display: block; margin: 4px 0;">${data.dropoffLocation}</strong>
                  <span style="color: #d97706; font-size: 13px; font-weight: bold;">${data.untilDate} @ ${data.untilTime}</span>
                </td>
              </tr>
            </table>
          </div>

          <!-- Next Steps -->
          <h3 style="color: #0C4587; font-size: 16px; font-weight: 700; margin-bottom: 15px;">What happens next?</h3>
          <ul style="color: #475569; font-size: 14px; line-height: 1.8; padding-left: 20px; margin: 0;">
            <li style="margin-bottom: 8px;">Our team will call you within <strong>12 business hours</strong> to confirm.</li>
            <li style="margin-bottom: 8px;">Secure payment link will be shared post-confirmation.</li>
            <li style="margin-bottom: 8px;">Please keep your original Driving License and ID ready.</li>
          </ul>

        </div>

        <!-- Footer -->
        <div style="background-color: #0f172a; padding: 30px; text-align: center; border-radius: 0 0 16px 16px;">
          <p style="margin: 0; color: #cbd5e1; font-size: 14px; font-weight: bold;">Carry-On Car Rental Pvt Ltd.</p>
          <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 13px;">Sector-63, Noida, Uttar Pradesh 201301</p>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #334155;">
            <a href="mailto:connect@carry-on.in" style="color: #5EBC23; text-decoration: none; font-size: 13px; font-weight: bold; margin: 0 10px;">connect@carry-on.in</a>
            <span style="color: #475569;">|</span>
            <a href="tel:+918383017006" style="color: #5EBC23; text-decoration: none; font-size: 13px; font-weight: bold; margin: 0 10px;">+91 83830 17006</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};
