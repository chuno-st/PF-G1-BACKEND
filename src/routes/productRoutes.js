const { Router } = require('express');
const { getById, createProduct, getProductsOrder, getByCategory } = require('../controllers/productControllers')

const router = Router();
router.get('/:id', getById);
router.get('/', getByCategory);
router.get('/', getProductsOrder);
router.post('/', createProduct);

module.exports = router;