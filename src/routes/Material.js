const express = require('express');
const router = express.Router();
const { Material } = require('../db.js');


//TRAER ITEMS DE DB
const getMaterialsDB = async () =>{
    const infoMaterial = await Material.findAll()

    return infoMaterial;
  };


//Postman: http://localhost:3001/material/get
router.get('/get', async (req,res)=>{

    const materialTotal = await getMaterialsDB()

    res.status(200).send(materialTotal)
      
  })

//Postman: http://localhost:3001/material
router.post('/', async (req,res)=>{

  const { name, material_id, hardness, color, purity} = req.body;
  const materialCreated = await Material.create({
    name,
    material_id,
    hardness,
    color,
    purity
  });
  
/*JSON PARA MANDAR POR BODY
{
    "name": "piedra",
    "material_id": 1,
    "hardness": "2",
    "color": "White",
    "purity": "3"
}
*/

    res.json(materialCreated)

})


module.exports = router