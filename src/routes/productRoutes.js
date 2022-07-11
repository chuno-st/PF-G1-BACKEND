const { Router } = require('express');
const { getById, createProduct, getProductsOrder, getByCategory, getProduct } = require('../controllers/productControllers')

const router = Router();
router.get('/', getProduct);
router.get('/order', getProductsOrder);
router.get('/category', getByCategory);
router.get('/:id', getById);
router.post('/', createProduct);

module.exports = router;

