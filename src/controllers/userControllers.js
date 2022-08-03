const { User, Product, Sale } = require('../db')
const axios = require("axios");

const getUser = async (req,res) => {

    try {
        const users = await User.findAll({
            include: Product
        })

        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getSaleProduct = async (req, res) => {
    const { id } = req.params
    try {
        const product = await User.findByPk(id,{
            include: Sale
        })
        let productSales = await product.Sales

        let product_id = []
        let productMap = await productSales.map(async e => {
            product_id = product_id.concat(e.dataValues.items)
        })

        const aux = product_id.map(e=>{
            return e.id
        })

        let productosComprados = [...new Set(aux)]
        res.json(productosComprados)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

const getUserById = async (req,res) => {
    const {id} = req.params
    try {
        const users = await User.findByPk(id)

        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addUser = async (req, res) => {
    const { id, userName, email, picture } = req.body
    try {
        const newUser = await User.findOrCreate({ 
            where: {
                id,
                userName,
                email,
                picture
            }
        })
        res.json(newUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const checkRole = async (req, res) => {
    const { id } = req.query
    try {
        const adminUser = await User.findOne({
            attributes: ['isAdmin'],
            where: {
                id: id,
            },
        })
        if (adminUser.isAdmin === null) {
            res.json({ message: "Not found!" })
        } else {
            res.json(adminUser.isAdmin)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateUser = async (req, res) => {

    const body = req.body
    try {
        if (body.isAdmin == undefined || body.isAdmin == null) {
            const updateUser = await User.update(body, {
                where: {
                    id: body.id
                }
            })

            res.json(updateUser)
        } else {
            throw new Error("no se puede realizar esta modificacion")
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const updateUserAdmin = async (req, res) =>{
    const {id, isAdmin, roles} = req.body
    try {
        if(isAdmin == true || isAdmin == false){
            const updateIsAdmin = await User.update({isAdmin:isAdmin}, {
                 where: {
                    id: id
                }
            })
            res.json(updateIsAdmin)
        }else if(roles){
            const updateIsAdmin = await User.update({roles:roles}, {
                where: {
                   id: id
               }
           })
           res.json(updateIsAdmin)
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
        
    }
}

const checkRoleUser = async (req, res) => {
    const { id } = req.params
    try {
        const userRole = await User.findByPk(id)


        res.json(userRole.roles)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
module.exports = {
    getSaleProduct,
    getUser,
    getUserById,
    addUser,
    checkRole,
    updateUser,
    updateUserAdmin,
    checkRoleUser
}