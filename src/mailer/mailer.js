const nodemailer = require('nodemailer');


const email = process.env.EMAIL;
const pass = process.env.PASS;


const purchaseEmail = (user) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: email,
            pass: pass
        }
    });
    return transporter.sendMail({
        from: 'Henry Diamonds App <henrydiamons@gmail.com>',
        to: user,
        subject: "Confirmación de compra",
        html: `
      <center>
      <hr/>
      <h2>Muchas gracias por tu compra!</h2> 
      <br/>
      <h4>Estamos preparando tu pedido.</h4>
      <h4>Te lo estaremos enviando a la brevedad!</h4>
      <img src="" width="600px" height="150px" />
      <hr/>
      </center>
      `
    }).then(() => user)

};


module.exports = {
    purchaseEmail
}