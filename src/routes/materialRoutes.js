const { Router } = require('express');
const { getMaterials, createMaterial, updateMaterial, deleteMaterial } = require('../controllers/materialControllers')

const router = Router();
router.get('/', getMaterials);

router.post('/', createMaterial);

router.patch('/', updateMaterial);

router.delete('/:id', deleteMaterial);
module.exports = router;