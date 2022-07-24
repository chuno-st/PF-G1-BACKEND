const { Category } = require('../db')

const getCategories = async (req, res) => {
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
        if (!findedCat) {
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
    const { id, name } = req.body
    try {
        const updatedCat = await Category.update({
            name
        }, {
            where: {
                category_id: id
            }
        })
        res.json(updatedCat)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deleteCategory = async (req, res) => {
    const { id } = req.params
    try {
        const deletedCat = await Category.destroy({
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
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
}