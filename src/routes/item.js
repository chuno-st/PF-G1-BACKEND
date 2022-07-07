const express = require('express');
const router = express.Router();
const { Item } = require('../db.js');

//TRAER ITEMS DE DB
const getDB = async () =>{
    const infoItem = await Item.findAll()

    return infoItem;
  };


//Postman: http://localhost:3001/item/get
router.get('/get', async (req,res)=>{

    const itemsTotal = await getDB()

    res.status(200).send(itemsTotal)
      
  })

//Postman: http://localhost:3001/item
router.post('/', async (req,res)=>{

    console.log("funciona")
  
    const name = "name"

    const itemCreated = await Item.create({name})


    res.json(itemCreated)

})



module.exports = router