require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = (
  fname,
  lname,
  email,
  phone,
  subject,
  message,
  contactReason
) => {
  return {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "New message from portfolio",
    html: `
    <h1>New Message From ${fname} ${lname}</h1>
    <p>Email: ${email}</p>
    <p>Phone Number: ${phone}</p>
    <p>Reason for contacting: ${contactReason}</p> 
    <h2>${subject}</h2>
    <p>${message}</p>
    `,
  };
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/message", async (req, res) => {
  try {
    const { fname, lname, email, phone, subject, message, contactReason } =
      req.body;
    const info = await transporter.sendMail(
      mailOptions(fname, lname, email, phone, subject, message, contactReason)
    );
    console.log(info.response);
    res.json({ message: "email sent successfully" });
  } catch (err) {
    res.status(500).json({ err: "Error sending email" });
  }
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
