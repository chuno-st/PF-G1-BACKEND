const { User } = require('../db')

const addUser = async (req, res) => {
    const { id, userName, email } = req.body
    try {
        const newUser = await User.findOrCreate({
            where: {
                id,
                userName,
                email
            }
        })
        res.json(newUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(`id ${id}, name ${userName}, email ${email}`)
    }
}

const checkRole = async (req, res) => {
    const { id } = req.query
    try {
        const adminUser = await User.findOne({
            attributes: ['isAdmin'],
            where: {
                id: id,
            },
        })
        if(adminUser.isAdmin === null){
            res.json({ message: "Not found!"})
        } else {
            res.json(adminUser.isAdmin)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
module.exports = {
    addUser,
    checkRole
}