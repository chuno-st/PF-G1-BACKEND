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


//-------------------POST-----------------------//
const createMaterial = async (req, res) => {
    const {name, hardness, purity, color} = req.body

    
    try {
        const newMaterial = await Material.create({
            name,
            hardness,
            purity
        })
        
        const colores = color?.map(async c =>{
            let [findColor, validacion] = await Color.findOrCreate({
                where:{
                    name: c
                }
            });
            await newMaterial.addColor(findColor);
        })

        res.json(newMaterial)
        
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}



//-------------------PUT-----------------------//
const updateMaterial = async (req, res) => {
    const {id,name, hardness, purity, color} = req.body
    try {
        const material = await Material.findByPk(id)

        const updateMaterial = await Material.update({
            name, 
            hardness, 
            purity,
        },{
            where:{
                material_id: id
            }
        })

        if(color.length > 0){

            const objColores = []
            const colores = color?.map( c =>{
                return new Promise ( async (resolve, reject) => {
                    let busca = await Color.findOne({
                        where:{
                            name: c
                        }
                    });
    
                    resolve(objColores.push(busca))
    
                    reject(error => next(error))
                })
            })
    
            await Promise.all(colores)
            material.setColors(objColores)

        }
        
        res.json(updateMaterial)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}



//-------------------DELETE-----------------------//
const deleteMaterial = async (req,res) => {
    const {id} = req.params
    try {
        const deleteMaterial = await Material.destroy({
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
    getMaterials,
    createMaterial,
    updateMaterial,
    deleteMaterial
}