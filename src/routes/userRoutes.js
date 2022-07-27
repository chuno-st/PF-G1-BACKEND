const { Router } = require('express');
const { addUser, checkRole, updateUser, updateUserAdmin, deleteUserAdmin } = require('../controllers/userControllers')

const router = Router();

router.post('/', addUser);
router.put('/' , updateUser);
router.put('/admin' , updateUserAdmin);
router.get('/checkrole', checkRole);
router.delete('/admin', deleteUserAdmin);

module.exports = router;