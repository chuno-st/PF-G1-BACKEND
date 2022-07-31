const { Router } = require('express');
const {getSales } = require('../controllers/salesControllers')

const router = Router();

router.get('/', getSales)
router.post('/', );


module.exports = router;