const { Sale } = require('../db')

const saveSale = async (req) => {
    try {
      const sale = await Sale.create(req)
      
      console.log(sale)
    } catch (error) {
        return console.log("message: error.message")
    }

} 

module.exports = {
    saveSale
}