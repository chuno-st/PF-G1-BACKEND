const { Router } = require('express');
const { payProduct } = require('../controllers/webHooks.Controllers');


const router = Router();

router.post('/', payProduct);

module.exports = router