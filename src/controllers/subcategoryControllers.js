const { SubCategory } = require('../db')

const getSubCategories = async (req, res)=>{
    try {
        const allSubCategories = await SubCategory.findAll()
        res.json(allSubCategories)
    } catch (error) {
        res.status(500).json({message: message.error})
    }
}

module.exports = {
    getSubCategories
}