const { Router } = require('express');
const {getSales, updateStatus, getUserSales, filterByStatus, filterByOrder, filterByOrderDate, filterByRangeDate } = require('../controllers/salesControllers')

const router = Router();

router.get('/', getSales)
router.patch('/', updateStatus)
router.post('/', );
router.get('/user/:id', getUserSales)
router.get('/filter/status', filterByStatus)
router.get('/filter/order', filterByOrder)
router.get('/filter/orderDate', filterByOrderDate)
router.get('/filter/rangeDate', filterByRangeDate)

module.exports = router;