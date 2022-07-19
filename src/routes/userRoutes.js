const { Router } = require('express');
const { addUser, checkRole } = require('../controllers/userControllers')

const router = Router();

router.post('/', addUser);
router.get('/checkrole', checkRole)

module.exports = router;