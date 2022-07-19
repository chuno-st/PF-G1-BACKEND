const { User } = require('../db')

const addUser = async (req, res)=>{
    const {id, userName,email} = req.body
    try {
        const newUser = await User.findOrCreate({
            where:{
                id,
                userName,
                email
            }})
        res.json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log(`id ${id}, name ${name}, email ${email}`)
    }
}

const checkRole = async (req, res)=>{
    const {id} = req.query
    try {
        if (id) {
            const newUser = await User.findByPk({
                id,
                atributtes
            })
            } 
            if(newUser){
                res.send(true)
            }else {
                res.send(false)
            }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
module.exports = {
    addUser,
    checkRole
}