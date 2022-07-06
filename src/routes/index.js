const { Router } = require('express');

//importar todas las rutas
const item = require('./item.js');
//

const router = Router();


//setear los router.use para cada ruta
router.use('/item', item);
//


module.exports = router;