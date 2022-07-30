const axios = require("axios");
const { User } = require('../db');
const { saveSale } = require('./salesControllers');
const { purchaseEmail }= require('../mailer/mailer')
const deploy_fronturl = process.env.DEPLOY_FRONT_URL;
const deploy_backurl = process.env.DEPLOY_BACK_URL;


const paymentMP = async (req, res) => {

  const { id } = req.query
  let items = req.body
  console.log(items)
  const itemsMapeados = items.map(item => ({
    id: item.product_id,
    category_id: item.category_id,
    title: item.name,
    description: item.description,
    picture_url: item.image,
    quantity: item.cantidad,
    unit_price: item.price
  }))

  const user = await User.findByPk(id)

  const payerMP = {
    name: user.userName,
    surname: user.userName,
    email: user.email,
    phone: {
      number: user.telefono
    },
    identification: {
      type: "DNI",
      number: user.dni
    },
    address: {
      street_name: user.calle,
      street_number: user.direccion,
      zip_code: user.codigo_postal
    }
  }

  try {
    // console.log("info del pagante", payerMP)
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      items: itemsMapeados,
      payer: payerMP,
      notification_url: `${deploy_backurl}/notification`,
      back_urls: {
        failure: `${deploy_fronturl}`,
        pending: `${deploy_fronturl}`,
        success: `${deploy_fronturl}`
      }
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    const dataSale = {
      client_id: payment.data.client_id,
      collector_id: payment.data.collector_id,
      sale_id: payment.data.id,
      items: payment.data.items,
      operation_type: payment.data.operation_type
    }

    saveSale(dataSale)

    purchaseEmail(payerMP.email)
    // console.log('email enviado')


    res.json(payment.data.init_point);

  } catch (error) {
    return res.status(500).json({ message: error.message })
    console.log(items)
  }
}

const confirmationEmail=(req,res)=>{
  purchaseEmail(req.user)

  res.json({msg:'Mail enviado correctamente.'})
}

module.exports = {
  paymentMP,
  confirmationEmail
}

