const { Router } = require('express');
const { getById, createProduct, getProductsOrder, getBySubCategory, getProduct, getPagination, getByMaterial, getByRangePrice, updateProduct } = require('../controllers/productControllers')

const router = Router();
router.get('/', getProduct);
router.get('/order', getProductsOrder);
router.get('/subCategory', getBySubCategory);
router.get('/pagination', getPagination)
router.get('/material', getByMaterial);
router.get('/rangeprice', getByRangePrice);
router.get('/:id', getById);
router.post('/', createProduct);
router.put('/', updateProduct)

module.exports = router;

