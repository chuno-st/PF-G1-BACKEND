const { Product, Material, Review, SubCategory, Category } = require('../db');
const {Op, Model} = require('sequelize');

//-------------------GET-----------------------//
const getById = async (req, res) => {
    try {
        const { id } = req.params
        const producto = await Product.findByPk(id,{
            include: Review,
        })
        res.json(producto)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getProduct = async (req, res) => {
const {name, limite, desde} = req.query

    try {
        if (name) {
            const productByName = await Product.findAll({
                where: {
                    name: {
                    [Op.iLike]: `%${name}%`,
                    }
                },
                include: Review
            })
            productByName ?
                res.status(200).json(productByName) :
                res.status(404).json({message: "Product doesn't exist"})
        }
        else{
            const allProducts = await Product.findAll({
                include: Review
            })
            res.status(200).json(allProducts)
        }
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
                },
                include: Review
                })
                res.json(productsByRangePrice);
                
            }else{
                const products = await Product.findAll({
                    include: Review,
                })
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
                },{
                    model: Review
                }]
            })
            res.json(productsByMaterial);
        }
        else{
            const products = await Product.findAll({
                include: Review
            })
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
                },
                include: Review
            });
            res.json(productsBySubCategory);
        }
        else if (max && min && subcategory) {
            const productsBySubCategory = await Product.findAll({
                where: {
                    subCategory_id: subcategory,
                    price :{
                        [Op.between]: [min, max]
                    }
                },
                include: Review
            });
            res.json(productsBySubCategory);
        }
        else{
            const products = await Product.findAll({
                include: Review
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
                        limit: limite,
                        include: Review
                    })
                    res.json(productsOrderByPrice)
                }
                break;
                
                case "name":
                    if (order === "ASC" || order === "DESC") {
                        const productsOrderByABC = await Product.findAll({
                            order: [[orderBy, order]],
                        offset: desde,
                        limit: limite,
                        include: Review
                    })
                    res.json(productsOrderByABC)
                }
                break;
                
                
            default:
                    
                const products = await Product.findAll({
                    offset: desde,
                    limit: limite,
                    include: Review
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

//-------------------POST-----------------------//
const createProduct = async (req, res) => {
    let {
    name,
    description, 
    price, 
    image,
    material_id,
    subCategory_id,
    category_id
    } = req.body
    
    price = parseInt(price)

    try {
        const newProduct = await Product.create({
            name,
            description, 
            price, 
            image,
        })
        
        if (category_id !== ''){
            newProduct.setCategory(category_id)
        }
        if (subCategory_id !== ''){
            newProduct.setSubCategory(subCategory_id)
        }
        if (material_id !== ''){
            newProduct.setMaterial(material_id)
        }
        console.log(req.body)
        res.json(newProduct)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const postReview = async (req,res) => {
    const {id, comment, author, rating} = req.body
    try {
        const findProduct = await Product.findByPk(id)

            findProduct.createReview({
                comment,
                author,
                rating
            })
    
            res.json(findProduct)

    } catch (error) {
        console.log(req.body)
        return res.status(500).json({ message: error.message })
    }
}

//-------------------PUT-----------------------//
const updateProduct = async (req, res) => {
    let {
        id,
        name,
        description, 
        price, 
        image,
        material_id,
        subCategory_id,
        category_id
        } = req.body
        
        price = parseInt(price)
        id = parseInt(id)

    try {
        const updateProduct = await Product.update({
            name,
            description, 
            price, 
            image,
            material_id,
            subCategory_id,
            category_id
        },{
            where:{
                product_id: id
            }
        })

        res.json(updateProduct)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//-------------------DELETE-----------------------//
const deleteProduct = async (req,res) => {
    const {id} = req.params
    try {
        const deleteProduct = await Product.destroy({
            where:{
                product_id:id
            }
        })

        res.json(deleteProduct)
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
    getByMaterial,
    updateProduct,
    deleteProduct,
    postReview
}
