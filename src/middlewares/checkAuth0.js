const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const { User } = require('../db')
//const jwtAuthz = require('express-jwt-authz')


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
        console.log(adminUser.isAdmin)
        if (adminUser.isAdmin == true) {
            console.log("permiso")
            next()
        } else {
            // next()
            throw new Error("permiso denegado")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

/*const checkPermissions = jwtAuthz(["read:messages"],{ //RE HACER MIDDELWARE PROPIO
    customScopeKey:"permissions",
    checkAllScopes: true
});*/

module.exports = {
    checkJwt,
    checkIsAdmin
    /*checkPermissions*/
};
