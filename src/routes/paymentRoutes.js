const { Router } = require('express');
const { paymentMP, paymentButton } = require('../controllers/paymentControllers')
const { checkJwt, checkPermissions } = require('../middlewares/checkAuth0');

const router = Router();

router.post('/', /* checkJwt */ paymentMP);
router.get('/button' ,checkJwt, checkPermissions , paymentButton);



module.exports = router;