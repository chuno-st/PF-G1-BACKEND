const { Router } = require('express');
const { getMaterials, createMaterial, updateMaterial, stateMaterial, getMaterialsAdmin } = require('../controllers/materialControllers')

const router = Router();
router.get('/', getMaterials);
router.get('/admin', getMaterialsAdmin)

router.post('/', createMaterial);

router.patch('/', updateMaterial);

router.delete('/:id', stateMaterial);
module.exports = router;