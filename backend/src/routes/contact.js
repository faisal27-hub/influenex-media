const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// ── Nodemailer Transport ───────────────────────────────────────
const createTransport = () => {
  // Strip any spaces from the App Password automatically (e.g. "abcd efgh ijkl mnop" -> "abcdefghijklmnop")
  const smtpPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');

  if (process.env.SMTP_HOST && process.env.SMTP_HOST.includes('gmail.com')) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: smtpPass,
      },
    });
  }
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: smtpPass,
    },
  });
};

// ── POST /api/contact ──────────────────────────────────────────
router.post('/', async (req, res) => {
  const {
    companyName,
    website,
    fullName,
    email,
    phone,
    campaignGoal,
    campaignBudget,
    preferredPlatform,
    message,
  } = req.body;

  // Basic validation
  if (!companyName || !fullName || !email || !campaignGoal || !campaignBudget || !preferredPlatform) {
    return res.status(400).json({
      success: false,
      message: 'All required fields (Company Name, Full Name, Email, Goal, Budget, Platform) must be filled.',
    });
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.',
    });
  }

  try {
    // ── Send Email Notification ────────────────────────────────
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error('SMTP configuration (SMTP_USER or SMTP_PASS) is missing on the server.');
    }

    // Flag placeholder password
    if (process.env.SMTP_PASS === 'your-gmail-app-password') {
      throw new Error('Invalid SMTP credentials: The server is currently configured with placeholder password "your-gmail-app-password". Please edit the .env file in backend/ with your real Gmail App Password.');
    }

    const transporter = createTransport();

    // Verify SMTP connection before attempting send
    await transporter.verify();

    // Admin notification email
    await transporter.sendMail({
      from: `"Influnex Media Website" <${process.env.SMTP_USER}>`,
      to: 'influnexmedia.in@gmail.com', // Always send to this email as requested!
      subject: `🚀 New Campaign Brief from ${companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; padding: 32px; border-radius: 16px;">
          <div style="background: linear-gradient(135deg, #bd2bf2, #00b4ec); padding: 24px; border-radius: 12px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Campaign Brief</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Submitted via influnexmedia.com</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ['Company Name', companyName],
              ['Website', website || 'Not provided'],
              ['Contact Name', fullName],
              ['Email', email],
              ['Phone', phone || 'Not provided'],
              ['Campaign Goal', campaignGoal],
              ['Campaign Budget', campaignBudget],
              ['Preferred Platform', preferredPlatform],
            ].map(([label, value]) => `
              <tr>
                <td style="padding: 12px 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-bottom: 8px; color: #94a3b8; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top; width: 140px;">${label}</td>
                <td style="padding: 12px 16px; color: #e2e8f0; font-size: 14px;">${value}</td>
              </tr>
            `).join('')}
          </table>
          
          ${message ? `
            <div style="margin-top: 24px; padding: 16px; background: rgba(189,43,242,0.1); border-radius: 8px; border-left: 3px solid #bd2bf2;">
              <p style="color: #94a3b8; font-size: 12px; font-weight: bold; text-transform: uppercase; margin: 0 0 8px;">Message</p>
              <p style="color: #e2e8f0; font-size: 14px; margin: 0; line-height: 1.6;">${message}</p>
            </div>
          ` : ''}
          
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center;">
            <p style="color: #64748b; font-size: 12px; margin: 0;">
              Submitted at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
            </p>
          </div>
        </div>
      `,
    });

    // Auto-reply to submitter
    await transporter.sendMail({
      from: `"Influnex Media" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your campaign brief, ${fullName}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; padding: 32px; border-radius: 16px;">
          <div style="background: linear-gradient(135deg, #bd2bf2, #00b4ec); padding: 24px; border-radius: 12px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Brief Received! 🎉</h1>
          </div>
          
          <p style="color: #e2e8f0; font-size: 16px; line-height: 1.6;">Hi ${fullName},</p>
          <p style="color: #94a3b8; font-size: 15px; line-height: 1.7;">
            Thank you for reaching out to Influnex Media! We've received your campaign brief for <strong style="color: #e2e8f0;">${companyName}</strong> and our team will review it shortly.
          </p>
          <p style="color: #94a3b8; font-size: 15px; line-height: 1.7;">
            We aim to respond within <strong style="color: #00b4ec;">24 hours</strong> with an initial proposal or to schedule a discovery call.
          </p>
          
          <div style="margin: 32px 0; padding: 20px; background: rgba(189,43,242,0.1); border-radius: 12px; border: 1px solid rgba(189,43,242,0.2);">
            <p style="color: #00b4ec; font-size: 14px; margin: 0 0 8px; font-weight: bold;">Your brief summary:</p>
            <p style="color: #94a3b8; font-size: 13px; margin: 0; line-height: 1.6;">
              Goal: ${campaignGoal}<br/>
              Budget: ${campaignBudget}<br/>
              Platform: ${preferredPlatform}
            </p>
          </div>
          
          <p style="color: #64748b; font-size: 13px; margin-top: 32px;">
            If you have any urgent questions, reply to this email or contact us at:<br/>
            <a href="mailto:influnexmedia.in@gmail.com" style="color: #00b4ec;">influnexmedia.in@gmail.com</a>
          </p>
          
          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.08); text-align: center;">
            <p style="color: #475569; font-size: 12px; margin: 0;">Influnex Media — Premium Influencer Marketing Agency</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Thank you! Your campaign brief has been submitted successfully. We'll get back to you within 24 hours.",
    });
  } catch (err) {
    // Requirements: Log the exact email error in the backend terminal for debugging.
    console.error('❌ Contact email delivery error:', err);
    return res.status(500).json({
      success: false,
      message: err.message || 'Failed to submit campaign brief. Please try again or email us directly.',
    });
  }
});

module.exports = router;
