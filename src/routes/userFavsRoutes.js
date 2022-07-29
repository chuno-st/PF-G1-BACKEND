const { Router } = require('express');
const { getFavs, addFav, deleteFav, checkFav } = require('../controllers/userFavsControllers');

const router = Router();

router.get('/:id', getFavs)
router.post('/:id', addFav)
router.post('/checkfav/:id', checkFav)
router.put('/:id', deleteFav)


module.exports = router;