const { Router } = require('express');
const { paymentMP } = require('../controllers/paymentControllers')

const router = Router();

router.post('/', paymentMP);


module.exports = router;