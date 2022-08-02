const axios = require("axios");
const { User } = require('../db')
const deploy_fronturl = process.env.DEPLOY_FRONT_URL;
const deploy_backurl = process.env.DEPLOY_BACK_URL;



const paymentMP = async (req, res) => {

  //const { id } = req.query
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

  //const user = await User.findByPk(id)
/*{"id":1165072510,"nickname":"TESTMYCQYJIS","password":"qatest9956","site_status"
:"active","email":"test_user_99523462@testuser.com"} */
  const payerMP = {
    name: "TESTMYCQYJIS",
    surname: "TESTMYCQYJIS",
    email: "test_user_99523462@testuser.com",
    phone: {
      number: "1165072510"
    },
    identification: {
      type: "DNI",
      number: "1165072510"
    },
    address: {
      street_name: "qatest9956",
      street_number: "qatest9956",
      zip_code: "qatest9956"
    }/*,
    shipments: {
    receiver_address: {
    
    }
  } */
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
      metadata: {sub: "google-oauth2|105534539959624378835", email: "ferreyralautaro69@gmail.com"}
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });
    //console.log(payment.data)
    res.json(payment.data.init_point);

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


module.exports = {
  paymentMP
}

