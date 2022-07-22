const { Product, Material } = require('../db');
const {Op, Model} = require('sequelize');


const getById = async (req, res) => {
    try {
        const { id } = req.params
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

const createProduct = async (req, res) => {
    const {name, description, price, image, category_id, subCategory_id, material_id} = req.body
    try {
        const newProduct = await Product.create({
            name, 
            description, 
            price, 
            image
        })

        newProduct.setSubCategory(subCategory_id)
        newProduct.setMaterial(material_id)
        newProduct.setCategory(category_id)

        res.json(newProduct)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getByRangePrice = async (req,res) => {
    const {max, min} = req.query

    try {
        if(max && min){

            const productsByRangePrice = await Product.findAll({
                where: {
                    price :{
                        [Op.between]: [min, max]
                    }
                }
                })
            res.json(productsByRangePrice);

        }else{
            const products = await Product.findAll()
            res.json(products)
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getByMaterial = async (req,res) => {
    const {material} = req.query

    try {
        if(material){
            const productsByMaterial = await Product.findAll({
                include: [{
                    attributes: ['name'],
                    model: Material,
                    where: { name: material } 
                  }]
            })
            res.json(productsByMaterial);
        }
        else{
            const products = await Product.findAll()
            res.json(products)
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getBySubCategory = async (req, res) => {
    const { subcategory, max, min } = req.query

    try {
        if(!max && !min && subcategory ){
            const productsBySubCategory = await Product.findAll({
                where: {
                    subCategory_id: subcategory,
                }
        });
         res.json(productsBySubCategory);
        }
        if (max && min && subcategory) {
            const productsBySubCategory = await Product.findAll({
                where: {
                    subCategory_id: subcategory,
                    price :{
                        [Op.between]: [min, max]
                    }
                }
        });
         res.json(productsBySubCategory);
        }
        else{
            const products = await Product.findAll()
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
    getByRangePrice,
    createProduct,
    getById,
    getProductsOrder,
    getBySubCategory,
    getProduct,
    getPagination,
    getByMaterial
}
