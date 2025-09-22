const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "❌ All fields are required!" });
  }

  try {
    // ✅ Use Gmail service (same as your working project)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your App Password
      },
    });

    // Verify connection before sending
    await transporter.verify();

    // Setup mail
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // send to yourself
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New message from your portfolio website</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br>${message}</p>
      `,
    });

    res.status(200).json({ message: "✅ Message sent successfully!" });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ message: "❌ Failed to send message. Try again later." });
  }
});

module.exports = router;