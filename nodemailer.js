var nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wherea00@gmail.com',
    pass: 'flvg onbz axpa jyvf'
  }
});

var mailOptions = {
  from: 'wherea00@gmail.com',
  to: 'wherea00@gmail.com',
  subject: 'testing email',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 