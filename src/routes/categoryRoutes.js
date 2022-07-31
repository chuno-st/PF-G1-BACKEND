const { Router } = require('express');
const { getCategoriesAdmin,getCategories, createCategory, updateCategory, stateCategory } = require('../controllers/categoryControllers')

const router = Router();

router.get('/', getCategories);
router.get('/admin', getCategoriesAdmin);
router.post('/', createCategory);
router.patch('/', updateCategory);
router.delete('/:id', stateCategory);



module.exports = router;
