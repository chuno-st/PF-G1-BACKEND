const { Router } = require('express');
const { getById, createProduct, getProductsOrder } = require('../controllers/productControllers')

const router = Router();
router.use('/:id', getById);
router.use('/', createProduct);
router.use('/', getProductsOrder);

module.exports = router;