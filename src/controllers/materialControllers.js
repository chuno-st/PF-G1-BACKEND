const { Material, Color } = require('../db')
const {borrandoString} = require('../Utils/Utils')
//-------------------GET-----------------------//

const getMaterials = async (req, res)=>{
    try {
        const allMaterials = await Material.findAll({
            where: {
                state: true
            },
            include: Color,
        })
        console.log("funcion get")
        res.json(allMaterials)
    } catch (error) {
        res.status(500).json({message: message.error})
    }
}

const getMaterialsAdmin = async (req, res)=>{
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
//-------------------POST-----------------------//
const createMaterial = async (req, res) => {
    const body = req.body
    const newMaterial = await borrandoString(body)
    let auxColor = newMaterial.color
    delete newMaterial.color
    try {
        const materialCreate = await Material.create(newMaterial)
        
        const colores = auxColor?.map(async c =>{
            let [findColor, validacion] = await Color.findOrCreate({
                where:{
                    name: c
                }
            });
            await materialCreate.addColor(findColor);
        })
        res.json(materialCreate)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//-------------------PATCH-----------------------//
const updateMaterial = async (req, res) => {
    const body = req.body

    const newBody = await borrandoString(body)
    let auxColor = newBody.color
    delete newBody.color

    try {
        const material = await Material.findByPk(newBody.id)
        const updateMaterial = await Material.update(newBody,{
            where:{
                material_id: newBody.id
            }
        })
        if(auxColor.length > 0 && auxColor[0] !== ""){
            allColors = await Color.findAll({
                where:{
                    name : auxColor
                }
            })
            material.setColors(allColors)
        }

        res.json(updateMaterial)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//-------------------DELETE-----------------------//
const stateMaterial = async (req,res) => {
    const {id} = req.params
    const {state} = req.query
    try {
        const deleteMaterial = await Material.update({state},{
            where:{
                material_id:id
            }
        })

        res.json(deleteMaterial)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getMaterialsAdmin,
    getMaterials,
    createMaterial,
    updateMaterial,
    stateMaterial
}