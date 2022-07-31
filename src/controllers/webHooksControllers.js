//const { saveSale } = require('./salesControllers');
const axios = require("axios");
const { Sale, User } = require('../db')
const { purchaseEmail }= require('../mailer/mailer');

const payProduct = async (req,res) => {
const dataBody = req.body
  if (!dataBody.resource){

    console.log("ID VENTA", req.body)
    const idVenta = dataBody.data.id
    
    const payment = await axios.get(`https://api.mercadopago.com/v1/payments/${idVenta}`, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });
    
    const sub = payment.data.metadata.sub
    
    const findUser = await User.findByPk(sub)
    
    findUser.createSale({
      id: payment.data.id,
      status: payment.data.status,
      monto: payment.data.transaction_amount,
      montoTotal: payment.data.transaction_details.total_paid_amount,
      items: payment.data.items
    })
    
    const email = payment.data.metadata.email
    purchaseEmail(email)
    res.status(200).send("OK")
  }else{
    res.status(200).send("OK")
  }
  }

module.exports = { 
    payProduct,
} 