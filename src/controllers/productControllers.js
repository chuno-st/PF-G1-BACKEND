const { Product, Material, Review} = require('../db');
const {Op, Model} = require('sequelize');
const {borrandoString} = require('../Utils/Utils')
//-------------------GET-----------------------//

const getAllFiltered = async (req, res) => {
    let obj = req.query
    let newObj = await borrandoString(obj)
    console.log(newObj)
    let max = newObj.max
    let min = newObj.min
    delete  newObj.max
    delete  newObj.min
    if (typeof max !== "undefined"){
        try {
            if(typeof newObj.name !== "undefined"){
                let aux = newObj.name
                delete  newObj.name
                const productByName = await Product.findAll({
                    where:{[Op.and]: [
                        newObj,
                        {price :{
                            [Op.between]: [min, max]
                        }},
                        {state: true}
                      ]},
                    include: Review
                })
                let filter = productByName.filter(p => p.name.includes(aux))
                filter.length > 0  ?
                    res.status(200).json(filter) :
                    res.status(404).json({message: "Product doesn't exist"})
            }else{
                const allProducts = await Product.findAll({
                    where:{[Op.and]: [
                        newObj,
                        {price :{
                            [Op.between]: [min, max]
                        }},
                        {state: true}
                      ]},
                    include: Review
                })
                res.status(200).json(allProducts)
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }else{
        const allProducts = await Product.findAll({
            where:{[Op.and]: [
                newObj,
                {state: true}
              ]},
            include: Review
        })
        res.status(200).json(allProducts)}
}

//-------------------GETADMIN-----------------------//
const getAllFilteredAdmin = async (req, res) => {
    let obj = req.query
    let newObj = await borrandoString(obj)
    let max = newObj.max
    let min = newObj.min
    delete  newObj.max
    delete  newObj.min
    if (typeof max !== "undefined"){
        try {
            if(typeof newObj.name !== "undefined"){
                let aux = newObj.name
                delete  newObj.name
                const productByName = await Product.findAll({
                    where:{[Op.and]: [
                        newObj,
                        {price :{
                            [Op.between]: [min, max]
                        }}
                      ]},
                    include: Review
                })
                let filter = productByName.filter(p => p.name.includes(aux))
                filter.length > 0  ?
                    res.status(200).json(filter) :
                    res.status(404).json({message: "Product doesn't exist"})
            }else{
                const allProducts = await Product.findAll({
                    where:{[Op.and]: [
                        newObj,
                        {price :{
                            [Op.between]: [min, max]
                        }}
                      ]},
                    include: Review
                })
                res.status(200).json(allProducts)
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }else{
        const allProducts = await Product.findAll({
            include: Review
        })
        res.status(200).json(allProducts)}
}

const getByIdAdmin = async (req, res) => {
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

const getById = async (req, res) => {
    try {
        const { id } = req.params
        const producto = await Product.findOne({
            where: {
                product_id: id,
                state: true
            },
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
                    },
                    state: true
                },
                include: Review
            })
            productByName ?
                res.status(200).json(productByName) :
                res.status(404).json({message: "El producto no existe"})
        }
        else{
            const allProducts = await Product.findAll({
                where:{
                    state: true
                },
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
                    },
                    state: true
                },
                include: Review
                })
                res.json(productsByRangePrice);
                
            }else{
                const products = await Product.findAll({
                    where: {
                        state: true
                    },
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
                    where: { name: material,
                        state: true } 
                },{
                    model: Review
                }]
            })
            res.json(productsByMaterial);
        }
        else{
            const products = await Product.findAll({
                where: {
                    state: true
                },
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
    console.log(max, min)
    try {
        if(!max && !min && subcategory ){
            const productsBySubCategory = await Product.findAll({
                where: {
                    subCategory_id: subcategory,
                    state: true
                },
                include: Review
            });
            res.json(productsBySubCategory);
        }
        else if (max && min && subcategory) {
            const productsBySubCategory = await Product.findAll({
                where: {
                    subCategory_id: subcategory,
                    state: true,
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
                where: {
                    state: true
                },
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
                        where: {
                            state: true
                        },
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
                        where: {
                            state: true
                        },
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
                    where:{
                        state: true
                    },
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


//-------------------POST-----------------------//
const createProduct = async (req, res) => {
    let {
    name,
    description, 
    price, 
    image,
    material_id,
    subCategory_id,
    category_id,
    stock,
    state
    } = req.body

    stock = parseInt(stock)
    price = parseInt(price)

    try {
        const newProduct = await Product.create({
            name,
            description, 
            price, 
            image,
            stock,
            state
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
    let {id, comment, author, rating} = req.body
    id = parseInt(id)
    rating = parseInt(rating)
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

//-------------------PATCH-----------------------//
const updateProduct = async (req, res) => {
    let body = req.body
    console.log(body)
    let newObj = await borrandoString(body)
    

    try {
        const updateProduct = await Product.update(newObj,{
            where:{
                product_id: newObj.product_id
            }
        })

        res.json(updateProduct)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//-------------------DELETE-----------------------//
const stateProduct = async (req,res) => {
    const {id} = req.params
    const {state} = req.query
    try {
        const deleteProduct = await Product.update({state},{
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
    getByIdAdmin,
    getAllFilteredAdmin,
    getAllFiltered,
    getByRangePrice,
    createProduct,
    getById,
    getProductsOrder,
    getBySubCategory,
    getProduct,
    getByMaterial,
    updateProduct,
    stateProduct,
    postReview
}
