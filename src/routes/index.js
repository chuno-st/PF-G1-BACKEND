const { Router } = require('express');
const productRoutes = require('./productRoutes');
const materialRoutes = require('./materialRoutes');
const subcategoryRoutes = require('./subcategoryRoutes');
const categoryRoutes = require('./categoryRoutes')

// Importar todos los routers;

//importar todas las rutas
// const material = require('./Material.js');
//

const router = Router();

router.use('/', productRoutes)
router.use('/', materialRoutes)
router.use('/', subcategoryRoutes)
router.use('/', categoryRoutes)


//setear los router.use para cada ruta
// router.use('/material', material);
//


module.exports = router;