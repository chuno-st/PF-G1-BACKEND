const { Router } = require('express');
const { getAllFiltered, getById, createProduct, getProductsOrder, getBySubCategory, getProduct, getPagination, getByMaterial, getByRangePrice, updateProduct, deleteProduct, postReview } = require('../controllers/productControllers')

const router = Router();
router.get('/', getProduct);
router.get('/order', getProductsOrder);
router.get('/subCategory', getBySubCategory);
router.get('/pagination', getPagination)
router.get('/material', getByMaterial);
router.get('/rangeprice', getByRangePrice);
router.get('/allfilter', getAllFiltered);

router.post('/', createProduct);
router.post('/addreview', postReview)

router.put('/', updateProduct)

router.get('/:id', getById);
router.delete('/:id', deleteProduct)

module.exports = router;

