const { Router } = require('express');
const { getCategories } = require('../controllers/categoryControllers')

const router = Router();

router.get('/', getCategories);


module.exports = router;
