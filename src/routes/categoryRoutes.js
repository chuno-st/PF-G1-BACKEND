const { Router } = require('express');
const { getCategories, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryControllers')

const router = Router();

router.get('/', getCategories);
router.post('/', createCategory);
router.put('/', updateCategory);
router.delete('/:id', deleteCategory);



module.exports = router;
