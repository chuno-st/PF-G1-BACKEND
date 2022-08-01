const { Router } = require('express');
const { addUser, checkRole, updateUser, updateUserAdmin, getUser } = require('../controllers/userControllers')

const router = Router();

router.get('/', getUser)
router.post('/', addUser);
router.put('/' , updateUser);
router.patch('/admin' , updateUserAdmin);
router.get('/checkrole', checkRole);



module.exports = router;