const { Router } = require('express');
const { paymentMP } = require('../controllers/paymentControllers')
const { checkJwt, checkPermissions } = require('../middlewares/checkAuth0');

const router = Router();

router.post('/', checkJwt , paymentMP);


module.exports = router;