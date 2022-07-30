const axios = require("axios");
const { purchaseEmail }= require('../mailer/mailer')


const payProduct = async (req, res) => {
    console.log (req.body);

    



    purchaseEmail(payerMP.email)
        console.log('email enviado')
    
    
        res.status(200).send("OK")
}


module.exports = {
    payProduct,
}