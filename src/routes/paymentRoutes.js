const { Router } = require('express');
const { paymentMP } = require('../controllers/paymentControllers');
const { checkJwt, checkIsAdmin } = require('../middlewares/checkAuth0');
const { getMaterials } = require('../controllers/materialControllers')

const router = Router();

router.get('/isadmin', checkIsAdmin, getMaterials);
router.post('/', paymentMP);



module.exports = router;