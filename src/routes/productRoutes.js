const { Router } = require('express');
const { getById, createProduct, getProductsOrder, getByCategory, getProduct, getPagination, getByMaterial, getByRangePrice } = require('../controllers/productControllers')

const router = Router();
router.get('/', getProduct);
router.get('/order', getProductsOrder);
router.get('/category', getByCategory);
router.get('/pagination', getPagination)
router.get('/material', getByMaterial);
router.get('/rangeprice', getByRangePrice);
router.get('/:id', getById);
router.post('/', createProduct);

module.exports = router;

