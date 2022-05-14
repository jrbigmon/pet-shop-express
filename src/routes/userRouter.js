const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

// router.get('', userController.homePage)
router.get('/', userController.userList)
router.get('/:id', userController.userIndex)
router.post('/create', userController.userCreated)
router.put('/:id', userController.userUpdated)
router.delete('/delete', userController.userDeleteId)
module.exports = router;