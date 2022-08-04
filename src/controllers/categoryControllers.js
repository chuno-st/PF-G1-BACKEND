const { Category } = require('../db')
const {borrandoString} = require('../Utils/Utils')

const getCategories = async (req, res) => {
    try {
        const allCategories = await Category.findAll({
            where:{
                state: true
            }
        })
        res.json(allCategories)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getCategoriesAdmin = async (req, res) => {
    try {
        const allCategories = await Category.findAll()
        res.json(allCategories)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const createCategory = async (req, res) => {
    const { name } = req.body
    try {
        let findedCat = await Category.findOne({
            where: {
                name: name
            }
        })
        if (!findedCat || findedCat == null) {
            const createdCat = await Category.create({
                name
            })
            findedCat = createdCat
        }
        res.json(findedCat)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const updateCategory = async (req, res) => {
    const body = req.body
    const newCategory = borrandoString(body)
    try {
        const updatedCat = await Category.update(newCategory, {
            where: {
                category_id: newCategory.id
            }
        })
        res.json(updatedCat)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const stateCategory = async (req, res) => {
    const {id} = req.params
    const { state } = req.query
    try {
        const deletedCat = await Category.update({state},{
            where: {
                category_id: id
            }
        })
        res.json(deletedCat)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getCategoriesAdmin,
    getCategories,
    createCategory,
    updateCategory,
    stateCategory
}