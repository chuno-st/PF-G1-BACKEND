const express = require('express');
const router = express.Router();
const { Item } = require('../db.js');


//unicamente get de prueba
router.post('/', async (req,res)=>{
    console.log("funciona")

    const name = "name"

    const itemCreated = await Item.create({name})

    res.send(itemCreated)
    //res.send("funciona")
})

router.get('/get', async (req,res)=>{
    console.log("funciona")

    const name = "name"

    const itemCreated = await Item.create({name})


    res.json(itemCreated)
    //res.send("funciona")
})


module.exports = router