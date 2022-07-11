const { Router } = require('express');
const { getSubCategories } = require('../controllers/subcategoryControllers')

const router = Router();

router.get('/', getSubCategories);


module.exports = router;