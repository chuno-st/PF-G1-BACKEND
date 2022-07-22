const { Router } = require('express');
const { getMaterials, /*createMaterial */} = require('../controllers/materialControllers')

const router = Router();
router.get('/', getMaterials);

//router.post('/', createMaterial);

module.exports = router;