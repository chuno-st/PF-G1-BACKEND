const axios = require("axios");
const { User } = require('../db')
const deploy_fronturl = process.env.DEPLOY_FRONT_URL;
const deploy_backurl = process.env.DEPLOY_BACK_URL;



const paymentMP = async (req, res) => {

  const { id } = req.query
  let items = req.body
  let aux = items[0]
  const itemsMapeados = aux.map(item => ({
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
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      items: itemsMapeados,
      payer: payerMP,
      notification_url: `${deploy_backurl}notification`,
      back_urls: {
        failure: `${deploy_fronturl}`,
        pending: `${deploy_fronturl}`,
        success: `${deploy_fronturl}`
      },
      metadata: {sub: user.id, email: user.email}
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });
    console.log(payment.data)
    res.json(payment.data.init_point);

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


module.exports = {
  paymentMP
}

