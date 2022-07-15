const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const app = require('../config/app');
const mailgun = require('../config/mailgun');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const transporter = nodemailer.createTransport(mg({ auth: mailgun }));

const send = ({ emailAddress, fullName, companyName, enquiryType, message, formType }) => {
  const targetEmail = isDev ? 'shaun@aux.co.za' : app.contact.email[formType];
  const from = `${fullName} (${companyName}) <${emailAddress}>`;
  const subject = `${fullName} from ${companyName} sent a ${enquiryType} enquiry`;

  const msg = {
    from,
    to: targetEmail,
    subject,
    text: message,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(msg, (error, info) => (error ? reject(error) : resolve(info)));
  });
};

module.exports = send;
