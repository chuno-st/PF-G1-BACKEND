const { Router } = require('express');
const { getSaleProduct, addUser, checkRole, updateUser, updateUserAdmin, getUser, getUserById, checkRoleUser } = require('../controllers/userControllers')

const router = Router();

router.get('/', getUser);
router.post('/', addUser);
router.put('/' , updateUser);
router.get('/checkrole', checkRole);
router.get('/usersale/:id', getSaleProduct);
router.get('/:id', getUserById);
router.get('/checkrole/user/:id', checkRoleUser)
router.patch('/admin' , updateUserAdmin);

module.exports = router;