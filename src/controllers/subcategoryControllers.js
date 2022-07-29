const { SubCategory } = require('../db')
const {borrandoString} = require('../Utils/Utils')
const getSubCategories = async (req, res)=>{
    try {
        const allSubCategories = await SubCategory.findAll()
        res.json(allSubCategories)
    } catch (error) {
        res.status(500).json({message: message.error})
    }
}

const createSubCategory = async (req, res) => {
    const { name } = req.body
    try {
        let findedSubCat = await SubCategory.findOne({
            where: {
                name: name
            }
        })
        if (!findedSubCat) {
            const createdSubCat = await SubCategory.create({
                name
            })
            findedSubCat = createdSubCat
        }
        res.json(findedSubCat)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const updateSubCategory = async (req, res) => {
    const body = req.body
    const newSubCategory = await borrandoString(body)
    try {
        const updatedSubCat = await SubCategory.update(newSubCategory,{
            where:{
                subCategory_id: newSubCategory.id
            }
        })
        res.json(updatedSubCat)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deleteSubCategory = async (req, res) => {
    const { id } = req.params
    try {
        const deletedSubCat = await SubCategory.destroy({
            where: {
                subCategory_id: id
            }
        })
        res.json(deletedSubCat)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getSubCategories,
    deleteSubCategory,
    createSubCategory,
    updateSubCategory
}