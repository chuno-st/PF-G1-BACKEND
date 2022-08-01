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

const filterByStatus = async (req, res) => {
    const { status } = req.query;
    try {
        const filteredStatus = await Sale.findAll({
            where: {
                status
            }
        })
        res.json(filteredStatus)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const filterByOrder = async (req, res) => {
    const { order } = req.query;
    try {
        const filteredOrder = await Sale.findAll({
            order: [["monto", order]]
        })
        res.json(filteredOrder)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const filterByOrderDate = async (req, res) => {
    const { orderDate } = req.query;
    try {
        const filteredOrderDate = await Sale.findAll({
            orderDate: [["createdAt", orderDate]]
        })
        res.json(filteredOrderDate)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const filterByRangeDate = async (req, res) => {
    const { rangeDate } = req.query;
    try {

        res.json()

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
module.exports = {
    saveSale,
    getSales,
    updateStatus,
    getUserSales,
    filterByStatus,
    filterByOrder,
    filterByOrderDate,
    filterByRangeDate
}