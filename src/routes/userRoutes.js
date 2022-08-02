const { Router } = require('express');
const { addUser, checkRole, updateUser, updateUserAdmin, getUser, getUserById } = require('../controllers/userControllers')

const router = Router();

router.get('/', getUser);
router.post('/', addUser);
router.put('/' , updateUser);
router.get('/checkrole', checkRole);
router.get('/:id', getUserById);
router.patch('/admin' , updateUserAdmin);

module.exports = router;