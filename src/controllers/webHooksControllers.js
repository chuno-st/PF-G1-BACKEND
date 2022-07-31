//const { saveSale } = require('./salesControllers');
const { purchaseEmail }= require('../mailer/mailer');

const payProduct = async (req,res) => {
    console.log("aca empieza",req.body, "aca termina")
    const email = "ferreyralautaro69@gmail.com"
    purchaseEmail(email)
     res.status(200).send("OK")
}

module.exports = { 
    payProduct,
} 