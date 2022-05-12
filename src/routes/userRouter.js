const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.get('/', userController.homePage)
router.get('/users', userController.userList)
router.get('/users/:id', userController.index)
router.post('/users/create', userController.userCreated)
router.put('/users/:id', userController.userUpdated)
router.delete('/users/delete', userController.userDeleteId)
module.exports = router;