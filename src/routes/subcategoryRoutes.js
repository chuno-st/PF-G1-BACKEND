const { Router } = require('express');
const { getSubCategories, deleteSubCategory, updateSubCategory, createSubCategory } = require('../controllers/subcategoryControllers');


const router = Router();

router.get('/', getSubCategories);
router.post('/', createSubCategory);
router.patch('/', updateSubCategory);
router.delete('/:id', deleteSubCategory);

module.exports = router;