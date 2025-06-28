const nodemailer = require("nodemailer");

let transporter;
let testAccount;

const init = async () => {
  testAccount = await nodemailer.createTestAccount();

  transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
};

const sendEmail = async ({ to, subject, text, html }) => {
  try {
    if (!transporter) {
      await init();
    }

    const info = await transporter.sendMail({
      from: `"URL SHORTENER" <${testAccount.user}>`,
      to,
      subject,
      text,
      html,
    });

    const testEmailURL = nodemailer.getTestMessageUrl(info);
    console.log("Verify Email:", testEmailURL);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendEmail };
