const { Router } = require('express');
const { addUser } = require('../controllers/userControllers')

const router = Router();

router.post('/', addUser);


module.exports = router;