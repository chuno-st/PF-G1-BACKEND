const { Router } = require('express');
const { getSubCategories, deleteSubCategory, updateSubCategory, createSubCategory } = require('../controllers/subcategoryControllers');
const { checkJwt, checkPermissions } = require('../middlewares/checkAuth0');

const router = Router();

router.get('/', getSubCategories);
router.post('/', createSubCategory);
router.put('/', updateSubCategory);
router.delete('/:id', deleteSubCategory);

module.exports = router;