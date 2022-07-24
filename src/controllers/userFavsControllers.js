const { Product, User } = require('../db')

const getFavs = async (req, res) => {
    const { id } = req.params
    try {
        const userFind = await User.findByPk(id)
        const userFavs = await userFind.getProducts()

        res.json(userFavs)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const addFav = async (req, res) => {
    const { id } = req.params
    const { product_id } = req.body

    try {
        const userFind = await User.findByPk(id)
        const userAddFavs = await userFind.addProduct(product_id)
        
        res.json(userAddFavs)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deleteFav = async (req, res) => {
    const { id } = req.params
    const { product_id } = req.body

    try {
        const userFind = await User.findByPk(id)
        const userDeleteFavs = await userFind.removeProduct(product_id)
        
        res.json(userDeleteFavs)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getFavs,
    addFav,
    deleteFav

}