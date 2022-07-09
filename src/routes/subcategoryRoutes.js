const { Router } = require('express');
const { getSubCategoryFromDB } = require('../controllers/materialControllers')

const router = Router();
router.use('/subcategory', getSubCategoryFromDB);

module.exports = router;