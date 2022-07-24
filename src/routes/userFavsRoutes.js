const { Router } = require('express');
const { getFavs, addFav, deleteFav } = require('../controllers/userFavsControllers');

const router = Router();

router.get('/:id', getFavs)
router.post('/:id', addFav)
router.delete('/:id', deleteFav)

module.exports = router;