const { Product, Category } = require('../db');

const getById = async (req, res) => {

    try {
        const { id } = req.params
        const producto = await Product.findByPk(id)
        res.json(producto)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const createProduct = (req, res) => {
    try {
        res.send("Funciona Post")
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getProductsOrder = async (req, res) => {
    const { order, orderBy } = req.body

    try {
        switch (orderBy) {
            case "price":
                if (order === "ASC" || order === "DESC") {
                    const productsOrderByPrice = await Product.findAll({
                        order: [[orderBy, order]]
                    })
                    res.json(productsOrderByPrice)
                }
                break;

            case "name":
                if (order === "ASC" || order === "DESC") {
                    const productsOrderByABC = await Product.findAll({
                        order: [[orderBy, order]]
                    })
                    res.json(productsOrderByABC)
                }
                break;

            default:
                const products = await Product.findAll()
                res.json(products)
                break;
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getByCategory = async (req, res) => {
    try {
        const { category } = req.body

        const productsByCategory = await Product.findAll({
            include: {
                model: Category,
                required: true
            }
        });
        // const productsByCategory = await Product.findAll({
        //     include: [
        //         {
        //             model: Category,
        //             attributes: ['name'],
        //             through: {
        //                 attributes: []
        //             }
        //         }
        //     ]
        // });
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
module.exports = {
    createProduct,
    getById,
    getProductsOrder
}
