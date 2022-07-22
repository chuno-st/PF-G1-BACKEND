const { Material, Color } = require('../db')


//-------------------GET-----------------------//
const getMaterials = async (req, res)=>{
    try {
        const allMaterials = await Material.findAll({
            include: Color,
        })
        console.log("funcion get")
        res.json(allMaterials)
    } catch (error) {
        res.status(500).json({message: message.error})
    }
}

/*
//-------------------POST-----------------------//
const createMaterial = async (req, res) => {
    const body = req.body
    try {
        const newMaterial = await Material.create(body)
        
        newMaterial.addColors({name: body.colorName})
        console.log("funcion create")
        res.json(newMaterial)
        
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//-------------------PUT-----------------------//
const updateMaterial = async (req, res) => {
    const body = req.body
    try {
        const updateProduct = await Product.update(body,{
            where:{
                product_id: body.id
            }
        })

        res.json(updateProduct)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//-------------------DELETE-----------------------//
const deleteMaterial = async (req,res) => {
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
}*/


module.exports = {
    getMaterials,
    /*createMaterial,*/
    /*updateMaterial,
    deleteMaterial*/
}