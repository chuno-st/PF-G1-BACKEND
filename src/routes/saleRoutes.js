const { Router } = require('express');
const {getSales, updateStatus, getUserSales } = require('../controllers/salesControllers')

const router = Router();

router.get('/', getSales)
router.patch('/', updateStatus)
router.post('/', );
router.get('/user/:id', getUserSales)

module.exports = router;