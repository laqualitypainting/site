export default function (req, res) {
    let nodemailer = require("nodemailer");
    require('dotenv').config()
  
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
      secure: true,
    });
  
    const mailData = {
      from: process.env.EMAIL,
      to: 'contact@laqualitypainting.com',
      subject: `Message From ${req.body.name}. Their email is: ${req.body.email}`,
      text: req.body.message,
      html: `<div>Mesage: ${req.body.message} Customer Number: ${req.body.number} Service(s) They Want: ${req.body.service}</div>`
     }
     transporter.sendMail(mailData, function (err, info) {
      if(err){
        console.log("error on contact api")
        return res.status(err.statusCode || 500);
      }
      else
        console.log("hit the else")
        console.log("info:", info)
        res.sendStatus(200)
    })
  
    return res.end();
  }