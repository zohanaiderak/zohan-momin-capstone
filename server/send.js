const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const SMTPTransport = require('nodemailer/lib/smtp-transport');
const user = process.env.USER;
const password = process.env.PASSWORD;

const transport={
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        type: 'OAuth2',
        user: user,
        pass: password
    }
}
const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
      console.log("error" ,error);
    } else {
      console.log('Server is ready to take messages', success);
    }
  });

  router.post('/',(req, res) => {
    let name = req.body.name
    let email = req.body.email
    let description = req.body.description
    let accessory = req.body.accessory.name
    let phone = req.body.accessory.phoneid
    let content = `name: ${name} \n email: ${email} \n description: ${description} \n phone: ${phone} \n accessory: ${accessory} `
    let mailList = `${user},${email}`
    let mail = {
      from: email,
      to: mailList,  
      subject: `New Order from ${name}`,
      text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            status: 'fail'
          })
        } else {
          res.json({
           status: 'success'
          })
        }
      })
    })

module.exports = router;
