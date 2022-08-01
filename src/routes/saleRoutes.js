const { Router } = require('express');
const {getSales, updateStatus } = require('../controllers/salesControllers')

const router = Router();

router.get('/', getSales)
router.patch('/', updateStatus)
router.post('/', );


module.exports = router;