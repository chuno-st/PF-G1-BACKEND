
const axios = require("axios");


const paymentMP = async (req, res)=>{

    try {
        const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      items: [
        {
          title: "Dummy Title",
          description: "Dummy description",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "category123",
          quantity: 1,
          unit_price: 10
        }
      ],
      payer: {
        name: "Juan",
        surname: "Lopez",
        email: "test_user_99523462@testuser.com",
        phone: {
            area_code: "11",
            number: "4444-4444"
        },
        identification: {
            type: "DNI",
            number: "12345678"
        },
        address: {
            street_name: "Street",
            street_number: 123,
            zip_code: "5700"
        }
    },
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success"
      }
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

      res.json(payment.data);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    paymentMP
}

