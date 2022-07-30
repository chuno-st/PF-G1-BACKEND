const { Router } = require('express');
const { getSubCategoriesAdmin, getSubCategories, stateSubCategory, updateSubCategory, createSubCategory } = require('../controllers/subcategoryControllers');


const router = Router();

router.get('/', getSubCategories);
router.get('/admin', getSubCategoriesAdmin)
router.post('/', createSubCategory);
router.patch('/', updateSubCategory);
router.delete('/:id', stateSubCategory);

module.exports = router;