const { Router } = require('express');
const { payProduct } = require('../controllers/webHooksControllers');


const router = Router();

router.post('/', payProduct);

module.exports = router