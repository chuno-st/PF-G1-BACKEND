const { User } = require('../db')

const addUser = async (req, res)=>{
    const user = req.body
    
    try {
        const newUser = await User.findOrCreate({
            where:{
                id: user.id,
                userName: user.userName,
                email: user.email
            }})
        res.json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    addUser
}