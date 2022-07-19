const jwtValidator = require('../middlewares/jwtvalidator');
const rolevalidator = require('../middlewares/rolevalidator');
const hasRole = require('../middlewares/validator')

module.exports = {
    ...jwtValidator,
    ...rolevalidator,
    ...hasRole
}