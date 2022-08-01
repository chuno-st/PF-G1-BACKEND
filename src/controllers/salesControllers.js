const { Sale, User } = require('../db')
const { dispatchedEmail, anuledEmail } = require('../mailer/mailer');


const saveSale = async (req) => {
    try {
        const sale = await Sale.create(req)

        console.log(sale)
    } catch (error) {
        return console.log("message: error.message")
    }
}

const getSales = async (req, res) => {
    try {
        const sales = await Sale.findAll({
            include: [{ model: User }]
        })
        res.json(sales)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const updateStatus = async (req, res) => {
    const body = req.body
    try {
        const sale = await Sale.findOne({
            where: {
                id: body.id
            },
            include: [{ model: User, attributes: ["email"] }]
        }
        )
        if (body.status === "dispatch") {
            const updatedStatus = await Sale.update(body, {
                where: {
                    id: body.id
                },
            })
            dispatchedEmail(sale.dataValues.Users[0].email)
            res.json(updatedStatus)
        } else if (body.status === "ANULED") {
            const updatedStatus = await Sale.update(body, {
                where: {
                    id: body.id
                },
            })
            anuledEmail(sale.dataValues.Users[0].email)
            res.json(updatedStatus)
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getUserSales = async (req, res) => {
    const { id } = req.params
    try {
        const userSales = await User.findByPk(id, {
            include: [{ model: Sale }]
        }
        )
        res.json(userSales)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    saveSale,
    getSales,
    updateStatus,
    getUserSales
}