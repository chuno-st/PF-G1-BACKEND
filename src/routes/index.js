const { Router } = require('express');

//importar todas las rutas
const material = require('./Material.js');
//

const router = Router();


//setear los router.use para cada ruta
router.use('/material', material);
//


module.exports = router;