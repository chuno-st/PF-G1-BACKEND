const { Sale } = require('../db')

const saveSale = async (req) => {
    try {
      const sale = await Sale.create(req)
      
      console.log(sale)
    } catch (error) {
        return console.log("message: error.message")
    }

} 

const getSales = async (req,res) => {
    try {
        const sales = await Sale.findAll()
        res.json(sales)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    saveSale,
    getSales
}