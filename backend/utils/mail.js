const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const generateOTP = () => {
    let otp = '';
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
};

const mailTransport = ()=> 
nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'mb_moussous@esi.dz', // Your Gmail email address
      pass: 'qxil mkiq gslx pqne' // Your Gmail app password
  }
  });

  const emailVerificationTemplate = (otp) => `
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Verification</title>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
      <div style="background-color: #f4f4f4; padding: 20px;">
          <h2 style="color: #333;">Welcome to Our Community!</h2>
          <p style="color: #666;">Dear New Member,</p>
          <p style="color: #666;">We are thrilled to have you join our community. To get started, please verify your email address by entering the OTP code below:</p>
          <h3 style="color: #007bff;">${otp}</h3>
          <p style="color: #666;">This code will expire in a short while, so please complete the verification process promptly.</p>
          <p style="color: #666;">If you didn't sign up for our community, please disregard this email.</p>
          <p style="color: #666;">Thank you for joining us!</p>
          <p style="color: #666;">Warm Regards,</p>
          <p style="color: #666;">Ecometer Team</p>
      </div>
  </body>
  </html>
`;

const emailVerifiedTemplate = () =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification Success</title>
  <style>
    /* Add your CSS styles here */
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    h1 {
      color: #333;
    }
    p {
      margin-bottom: 20px;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Email Verification Success</h1>
    <p>Your email address has been successfully verified. You can now enjoy full access to our platform.</p>
    <p>If you have any questions or need further assistance, feel free to contact us.</p>
    <p>Thank you!</p>
  </div>
</body>
</html>
`



module.exports = {
    generateOTP ,
    mailTransport,
    emailVerificationTemplate,
    emailVerifiedTemplate
};
