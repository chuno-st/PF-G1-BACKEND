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

const getByCategory = async (req, res) => {
    const { category, subcategory } = req.body

    try {
        if (!subcategory) {
            const productsByCategory = await Product.findAll({
                where: {
                    category_id: category
                }
            });
            res.json(productsByCategory);
        } else {
            const productsByCategory = await Product.findAll({
                where: {
                    category_id: category,
                    subCategory_id: subcategory
                }
            });
            res.json(productsByCategory);
        }

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


module.exports = {
    createProduct,
    getById,
    getProductsOrder,
    getByCategory
}
