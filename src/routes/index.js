const { Router } = require('express');
const productRoutes = require('./productRoutes');
// Importar todos los routers;

//importar todas las rutas
const item = require('./item.js');
//

const router = Router();


//setear los router.use para cada ruta
router.use('/item', item);
//


module.exports = router;