const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const { User } = require('../db')


const domain = process.env.AUTH0_DOMAIN
const audience = process.env.AUTH0_AUDIENCE

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${domain}/.well-known/jwks.json`,
    }),
    audience: audience,
    issuer: `https://${domain}/`,
    algorithms: ['RS256'],
});

const checkIsAdmin = async (req, res, next) => {
    const { id } = req.query
    try {
        const adminUser = await User.findOne({
            attributes: ['isAdmin'],
            where: {
                id: id,
            },
        })
        if (adminUser.isAdmin == true) {
            console.log("permiso")
            next()
        } else {
            throw new Error("permiso denegado")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    checkJwt,
    checkIsAdmin
};
