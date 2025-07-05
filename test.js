const { sendVerificationEmail } = require('./index');

(async () => {
  try {
    const info = await sendVerificationEmail(
      {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: { user: 'example@gmail.com', pass: 'app password' }
      },
      'sent-example@gmail.com',
      '123456',
      'team name',
      'subject' // can be empty, default is Verify your email
    );
    console.log('Email sent:', info.messageId);
  } catch (err) {
    console.error('Error sending email:', err);
  }
})();
