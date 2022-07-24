const { Router } = require('express');
const { paymentMP } = require('../controllers/paymentControllers')

const router = Router();

router.get('/', paymentMP);


module.exports = router;