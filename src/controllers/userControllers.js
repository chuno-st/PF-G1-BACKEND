const { User } = require('../db')

const addUser = async (req, res)=>{
    const {id, name, email} = req.body
    console.log(`id ${id}, name ${name}, email ${email}`)
    try {
        const newUser = await User.findOrCreate({
            where:{
                id,
                userName: name,
                email
            }})
        res.json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log(`id ${id}, name ${name}, email ${email}`)
    }
}

module.exports = {
    addUser
}