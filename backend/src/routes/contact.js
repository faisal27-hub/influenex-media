const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { Resend } = require('resend');

// ── Nodemailer Transport Fallback ─────────────────────────────
const createTransport = () => {
  const smtpUser = (process.env.SMTP_USER || 'influnexmedia.in@gmail.com').trim();
  const smtpPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: false,
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
    const adminRecipient = (process.env.ADMIN_EMAIL || 'influnexmedia.in@gmail.com').trim();

    const adminHtml = `
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
    `;

    const userHtml = `
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
    `;

    // ── Option A: Resend API Delivery (Recommended for 100% Inbox Delivery) ──
    if (process.env.RESEND_API_KEY) {
      console.log('🚀 Sending email via Resend HTTP API...');
      const resendApiKey = process.env.RESEND_API_KEY.trim();
      const resend = new Resend(resendApiKey);
      const fromEmail = process.env.RESEND_FROM || 'onboarding@resend.dev';

      const resendResponse = await resend.emails.send({
        from: `Influnex Media <${fromEmail}>`,
        to: adminRecipient,
        replyTo: email,
        subject: `🚀 New Campaign Brief from ${companyName}`,
        html: adminHtml,
      });

      if (resendResponse.error) {
        console.error('❌ Resend API Error:', resendResponse.error);
        // Fallback to Option B (SMTP) below instead of returning fake success
      } else {
        console.log('✅ Resend Admin Email Sent Successfully! ID:', resendResponse.data?.id);

        // Try user auto-reply (Note: onboarding@resend.dev only allows sending to registered account email in test mode)
        resend.emails.send({
          from: `Influnex Media <${fromEmail}>`,
          to: email,
          subject: `We received your campaign brief, ${fullName}!`,
          html: userHtml,
        }).catch(e => console.warn('Resend user auto-reply notice:', e.message));

        return res.status(200).json({
          success: true,
          message: "Thank you! Your campaign brief has been submitted successfully. We'll get back to you within 24 hours.",
        });
      }
    }

    // ── Option B: Nodemailer SMTP Fallback ────────────────────────────────
    const senderEmail = (process.env.SMTP_USER || 'influnexmedia.in@gmail.com').trim();
    if (process.env.SMTP_PASS && process.env.SMTP_PASS !== 'your-gmail-app-password') {
      const transporter = createTransport();
      const results = await Promise.allSettled([
        transporter.sendMail({
          from: `"Influnex Media Website" <${senderEmail}>`,
          to: adminRecipient,
          replyTo: email,
          subject: `🚀 New Campaign Brief from ${companyName}`,
          html: adminHtml,
        }),
        transporter.sendMail({
          from: `"Influnex Media" <${senderEmail}>`,
          to: email,
          subject: `We received your campaign brief, ${fullName}!`,
          html: userHtml,
        }),
      ]);

      let adminMailFailed = false;
      let failureReason = '';

      results.forEach((resItem, i) => {
        if (resItem.status === 'rejected') {
          console.error(`❌ SMTP Email error (${i === 0 ? 'Admin' : 'Auto-reply'}):`, resItem.reason);
          if (i === 0) {
            adminMailFailed = true;
            failureReason = resItem.reason?.message || 'SMTP authentication or socket error';
          }
        } else {
          console.log(`✅ SMTP Email sent (${i === 0 ? 'Admin' : 'Auto-reply'}):`, resItem.value.messageId);
        }
      });

      if (adminMailFailed) {
        return res.status(500).json({
          success: false,
          message: `Email delivery failed: ${failureReason}`,
        });
      }
    } else if (!process.env.RESEND_API_KEY) {
      console.warn('⚠️ Neither RESEND_API_KEY nor valid SMTP_PASS configured.');
      return res.status(500).json({
        success: false,
        message: 'Server email service is not configured. Please add RESEND_API_KEY or SMTP credentials.',
      });
    }

    return res.status(200).json({
      success: true,
      message: "Thank you! Your campaign brief has been submitted successfully. We'll get back to you within 24 hours.",
    });
  } catch (err) {
    console.error('❌ Contact submission handler error:', err);
    return res.status(500).json({
      success: false,
      message: err.message || 'Failed to submit campaign brief.',
    });
  }
});

module.exports = router;
