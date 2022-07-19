const { Router } = require("express");
// const { jwtValidator } = require("../middlewares");
// const { validation } = require("../middlewares/validator");
// const { check } = require("express-validator");
// const { addressValidator } = require('../helpers/db-validators')
// const { postAddress, getAddress, updateAddress } = require('../controllers/address');

const router = Router();

/* router.get('/',[jwtValidator ], getAddress); */

/* router.post('/',[
    jwtValidator,
    check('address', 'adress must be valid').not().isEmpty(),
    check('city', 'city must be valid').not().isEmpty(),
    check('phone_number', 'phone number must be complete').not().isEmpty(),
    check('province', 'provicen must be complete').not().isEmpty(),
    validation
], postAddress); */

/* router.put('/:id', [
    jwtValidator,
    check("id", "The Id Doesnt exist").isMongoId(),
     check('id').custom(addressValidator),
    validation
], updateAddress) */

module.exports = router ;