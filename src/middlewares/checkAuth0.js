const {expressjwt: jwt} = require('express-jwt');
const jwksRsa = require('jwks-rsa');
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
/*
const checkPermissions = jwtAuthz(["read:messages"],{ //RE HACER MIDDELWARE PROPIO
    customScopeKey:"permissions",
    checkAllScopes: true
});*/

module.exports = {
    checkJwt
    /*checkPermissions*/
};
