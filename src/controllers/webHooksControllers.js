//const { saveSale } = require('./salesControllers');
//const { purchaseEmail }= require('../mailer/mailer');

const payProduct = async (req,res) => {
    console.log("aca empieza",req.body, "aca termina")
    console.log("req solo", req)
     res.status(200).send("OK")
}

module.exports = { 
    payProduct,
}