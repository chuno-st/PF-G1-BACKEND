const { Router } = require('express');
const productRoutes = require('./productRoutes');
const categoryRoutes = require('./categoryRoutes')
const subcategoryRoutes = require('./subcategoryRoutes');
// const materialRoutes = require('./materialRoutes');
const userRoutes = require('./userRoutes');
const paymentRoutes = require('./paymentRoutes')
// Importar todos los routers;

//importar todas las rutas
// const material = require('./Material.js');
//

const router = Router();

router.use('/adduser', userRoutes)
router.use('/product', productRoutes)
router.use('/category', categoryRoutes)
router.use('/subcategory', subcategoryRoutes)
router.use('/payment', paymentRoutes)
// router.use('/', materialRoutes)


//setear los router.use para cada ruta
// router.use('/material', material);
//


module.exports = router;