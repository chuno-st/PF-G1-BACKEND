//const { saveSale } = require('./salesControllers');
const { purchaseEmail }= require('../mailer/mailer');

const payProduct = async (req, res) => {
     
    const email = 'ferreyralautaro69@gmail.com'
    purchaseEmail(email)

     res.status(200).send("OK")
}

module.exports = {
    payProduct,
}