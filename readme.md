# 📧 verify-mail

> Send beautiful verification emails with OTPs on user signup, powered by Nodemailer.

![npm](https://img.shields.io/npm/v/verify-mail)
![License](https://img.shields.io/npm/l/verify-mail)
![Downloads](https://img.shields.io/npm/dm/verify-mail)

---

## ✨ Features

- Simple API to send verification emails
- Clean and professional HTML email template + plain text fallback
- Works with any SMTP provider (Gmail, SendGrid, Mailgun, etc.)

---

## 📦 Installation

```bash
npm install verify-mail
```

---

## 🚀 Usage

```js
const { sendVerificationEmail } = require('verify-mail');

(async () => {
  try {
    const info = await sendVerificationEmail(
      {
        host: 'smtp.example.com',
        port: 587,
        secure: false,
        auth: {
          user: 'your@email.com',
          pass: 'yourPassword'
        }
      },
      'recipient@example.com',
      '123456', // OTP
      'Verify your email' // Optional custom subject
    );
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
})();
```

---

## ⚙️ Parameters

| Parameter     | Type     | Required | Description                                                     |
| ------------- | -------- | -------- | --------------------------------------------------------------- |
| `smtpConfig`  | Object   | ✅       | SMTP config: `{ host, port, secure, auth: { user, pass } }`     |
| `to`          | String   | ✅       | Recipient email address                                         |
| `otp`         | String   | ✅       | The OTP code to send                                           |
| `subject`     | String   | ❌       | Custom subject (default: `'Verify your email'`)                |

---

## ✉️ Email Template

Your users will receive an email like:

> **Email Verification**  
> Thank you for signing up! Please use the following verification code:  
> **123456**  
> This code is valid for a limited time.  
> – The Team

Styled with a clean HTML template for better readability.

---

## 🛡 License

MIT © [Akshat Sharma](mailto:akshatsharmasde@gmail.com)

---

## 🙌 Contributing

Pull requests and suggestions are welcome! Feel free to open an issue or submit a PR.
