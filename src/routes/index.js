const { Router } = require('express');
const productRoutes = require('./productRoutes');
const categoryRoutes = require('./categoryRoutes')
const subcategoryRoutes = require('./subcategoryRoutes');
// const materialRoutes = require('./materialRoutes');

// Importar todos los routers;

//importar todas las rutas
// const material = require('./Material.js');
//

const router = Router();

router.use('/product', productRoutes)
router.use('/category', categoryRoutes)
router.use('/subcategory', subcategoryRoutes)
// router.use('/', materialRoutes)


//setear los router.use para cada ruta
// router.use('/material', material);
//


module.exports = router;