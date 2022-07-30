const { Router } = require('express');
const {getByIdAdmin,getAllFilteredAdmin, getAllFiltered, getById, createProduct, getProductsOrder, getBySubCategory, getProduct, getByMaterial, getByRangePrice, updateProduct, stateProduct, postReview } = require('../controllers/productControllers')

const router = Router();
router.get('/', getProduct);
router.get('/order', getProductsOrder);
router.get('/subCategory', getBySubCategory);
router.get('/material', getByMaterial);
router.get('/rangeprice', getByRangePrice);
router.get('/allfilter', getAllFiltered);
router.get('/admin', getAllFilteredAdmin);
router.get('/:id', getById);
router.get('/admin/:id', getByIdAdmin);

router.post('/', createProduct);
router.post('/addreview', postReview)

router.patch('/', updateProduct)

router.delete('/:id', stateProduct)

module.exports = router;

