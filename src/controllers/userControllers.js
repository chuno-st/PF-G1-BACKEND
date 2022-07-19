const { User } = require('../db')

const addUser = async (req, res)=>{
    const {id, userName,email, isAdmin} = req.body
    isAdmin = true
    try {
        const newUser = await User.findOrCreate({
            where:{
                id,
                userName,
                email,
                isAdmin
            }})
        res.json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message})
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