const { Category } = require('../db')

const getCategories = async (req, res)=>{
    try {
        const allCategories = await Category.findAll()
        res.json(allCategories)
    } catch (error) {
        res.status(500).json({message: message.error})
    }
}

module.exports = {
    getCategories
}