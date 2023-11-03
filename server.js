// Set up a basic contact form route
app.post("/send-email", (req, res) => {
  const { fullname, email, message } = req.body;

  // Create a Nodemailer transport
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "", // Your email address
      pass: "your-email-password",
    },
  });

  // Email data
  const mailOptions = {
    from: "your-email@example.com", // Your email address
    to: "amansinha5036@gmail.com", // Your email address (recipient)
    subject: "Contact Form Submission",
    text: `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to send email" });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ message: "Email sent successfully" });
    }
  });
});
