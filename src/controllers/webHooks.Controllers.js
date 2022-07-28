

const payProduct = async (req, res) => {
     console.log (req.body);
     res.send("Ok!")
}

module.exports = {
    payProduct,
}