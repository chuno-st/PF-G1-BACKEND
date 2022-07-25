const { Router } = require('express');
const { addUser, checkRole, updateUser } = require('../controllers/userControllers')

const router = Router();

router.post('/', addUser);
router.put('/' , updateUser);
router.get('/checkrole', checkRole)

module.exports = router;