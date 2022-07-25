const axios = require("axios");
const { User } = require('../db')


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
    console.log("info del pagante", payerMP)
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      items: itemsMapeados,
      payer: payerMP,
      back_urls: {
        failure: "https://pf-g1-frontend-six.vercel.app/",
        pending: "https://pf-g1-frontend-six.vercel.app/",
        success: "https://pf-g1-frontend-six.vercel.app/"
      }
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    res.json(payment.data.init_point);

  } catch (error) {
    console.log(items)
    return res.status(500).json({ message: error.message })
  }
}

const paymentButton = async (req, res) => {
  try {
    const message = "The API successfully validated your access token."
    res.status(200).send(message);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = {
  paymentMP,
  paymentButton
}

