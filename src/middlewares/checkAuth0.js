const {expressjwt : jwt} = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz')
const { domain, audience } = require('../config/env.dev');

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

const checkPermissions = jwtAuthz(["read:info"],{
    customScopeKey:"permissions"
});

module.exports = {
    checkJwt,
    checkPermissions
};