const nodemailer = require('nodemailer');

/**
 * Send a verification email with an OTP.
 * @param {Object} smtpConfig - SMTP config: { host, port, secure, auth: { user, pass } }
 * @param {string} to - Recipient's email
 * @param {string} otp - The OTP code
 * @param {string} [subject='Verify your email'] - Subject
 * @returns {Promise} info - result from nodemailer
 */
async function sendVerificationEmail(smtpConfig, to, otp, sender, subject = 'Verify your email') {
  const transporter = nodemailer.createTransport(smtpConfig);

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
      <h2 style="color: #333;">Email Verification</h2>
      <p>Thank you for signing up! Please use the following verification code:</p>
      <div style="font-size: 24px; font-weight: bold; margin: 20px 0; padding: 10px; background: #f4f4f4; text-align: center; border-radius: 4px; letter-spacing: 2px;">
        ${otp}
      </div>
      <p>This code is valid for a limited time. If you did not request this, you can ignore this email.</p>
      <p style="margin-top: 30px; color: #777;">– ${sender}</p>
    </div>
  `;

  const info = await transporter.sendMail({
    from: smtpConfig.auth.user,
    to,
    subject,
    text: `Your verification code is: ${otp}`,
    html: htmlContent
  });

  return info;
}

module.exports = { sendVerificationEmail };
