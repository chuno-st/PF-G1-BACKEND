const { User, Product } = require('../db')

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
        const productFav = await Product.findByPk(product_id)
        const findFav = await userFind.hasProduct(productFav)
        if(!findFav){
            const userAddFavs = await userFind.addProduct(product_id)
            res.json(userAddFavs)
        }else {
            throw new Error ("ya existe en favoritos")
        }
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
    deleteFav,
}