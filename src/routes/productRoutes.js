const { Router } = require('express');
const { getById, createProduct, getProductsOrder } = require('../controllers/productControllers')

const router = Router();
router.get('/:id', getById);
router.get('/', getProductsOrder);

router.post('/', createProduct);

module.exports = router;