const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '1goodfood143@gmail.com',
      pass: 'vfoi rbqi ibcp wbnr'
    }
    
  });

  router.post('/send-email', (req, res) => {
    const { recipientEmail } = req.body
  
    let email = recipientEmail.userEmail;
    
  
  
    const mailOptions = {
      from: '1goodfood143@gmail.com',
      to: email,
      subject: 'Your Order Confirmation',
      text: `Dear ${email}, \n\nWe're excited to inform you that your order is now ready for pickup! Please head over to our store counter to collect your items at your earliest convenience.
  
              \n \n Order Details: \n Product Name: ${recipientEmail.productName}  \n Quantity: ${recipientEmail.quantity} \n\nIf you have any questions or concerns about your order, please don't hesitate to contact us. We're here to help!
              \n Thank you for choosing us, and we hope you enjoy your purchase!
               \nBest regards,\nGood-Food`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email');
      } else {
        console.log('Email sent:', info.response);
        res.send('Email sent successfully');
      }
    });
  });

  module.exports = router;
