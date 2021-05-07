const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, 
    auth: {
      user: 'notificaciones@fafg.org',
      
    }
  });

  var mailOptions = {
    from: 'notificaciones@fafg.org',
    to: null,
    subject: null,
    text: null,
    html: null,
  };

  

 const sendMail = async (pTo, pSubject, pText, pHtml) => {
     console.log('entre');
     mailOptions.to = pTo;
     mailOptions.subject = pSubject;
     mailOptions.text = pText;
     mailOptions.html = pHtml;

     let resp= await transporter.sendMail(mailOptions);
     console.log(resp);
     return resp;
 } 

 
 
 

 module.exports = {
    sendMail,

 }
  