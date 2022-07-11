const { Product } = require('../db');
const {Op} = require('sequelize')

const getById = async (req, res) => {
    try {
        const { id } = req.query
        const producto = await Product.findByPk(id)
        res.json(producto)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getProduct = async (req, res) => {
    const {name, limite, desde} = req.query

    const products = await Product.findAll()
    try {
        if (name) {
            const productByName = await Product.findAll({
                where: {
                    name: {
                    [Op.iLike]: `%${name}%`,
                    }
                },
                offset: desde,
                limit: limite 
            })
            productByName ?
                res.status(200).json(productByName) :
                res.status(404).json({message: "Recipe doesn't exist"})
        }
        else{
            const allProducts = await Product.findAll({
                offset: desde,
                limit: limite 
            })
            res.status(200).json(allProducts)
        }
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
    const { category, subcategory, desde, limite } = req.query

    try {
        if(category && subcategory){
            const productsByCategory = await Product.findAll({
                where: {
                    category_id: category,
                    subCategory_id: subcategory
                },
                offset: desde,
                limit: limite 
            });
            res.json(productsByCategory);

        }else if(category){
            const productsByCategory = await Product.findAll({
                where: {
                    category_id: category
                },
                offset: desde,
                limit: limite 
        });
            res.json(productsByCategory);
        }
        else{
            const products = await Product.findAll({
                offset: desde,
                limit: limite 
            })
            res.json(products)
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getProductsOrder = async (req, res) => {
    const { order, orderBy, desde, limite  } = req.query
    try {
        switch (orderBy) {
            case "price":
                if (order === "ASC" || order === "DESC") {
                    const productsOrderByPrice = await Product.findAll({
                        order: [[orderBy, order]],
                        offset: desde,
                        limit: limite 
                    })
                    res.json(productsOrderByPrice)
                }
                break;

            case "name":
                if (order === "ASC" || order === "DESC") {
                    const productsOrderByABC = await Product.findAll({
                        order: [[orderBy, order]],
                        offset: desde,
                        limit: limite 
                    })
                    res.json(productsOrderByABC)
                }
                break;
                
                
            default:
                    
                const products = await Product.findAll({
                    offset: desde,
                    limit: limite 
                })
                res.json(products)
                break;
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Unicamente para PROBAR
const getPagination = async (req, res) => {
    const {desde, limite} = req.query
try {
    const paginado = await Product.findAll({ offset: desde, limit: limite });
    res.json(paginado)
} catch (error) {
    return res.status(500).json({ message: error.message })
}
}

module.exports = {
    createProduct,
    getById,
    getProductsOrder,
    getByCategory,
    getProduct,
    getPagination
}
