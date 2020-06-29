require("dotenv").config();
const nodemailer = require("nodemailer");

const { SERVER_EMAIL, SERVER_PASSWORD, TO_EMAIL } = process.env;

const sendEmail = (req, res) => {
  const { message, email, name, } = req.body;
//   const email = email;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SERVER_EMAIL,
      pass: SERVER_PASSWORD
    }
  });

  //
  let mailOptions = {
    from: email,
    to: TO_EMAIL,
    subject: `Feedback From user ${name}`,
    text: message
  };
  console.log(mailOptions);
  //
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.status(409).send("Error Occured");
    } else {
      res.status(200).send("Message Sent!");
    }
  });
};

module.exports = {
  sendEmail
};