const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

// router.get('', userController.homePage)
router.get('/users/show', userController.show)

router.get('/login', userController.login)
router.post('/login', userController.index)

router.get('/users/create', userController.createShow)
router.post('/users/create', userController.create)

router.put('/login/update/:id', userController.update)
router.get('/login/update/:id', userController.updateShow)

router.delete('/users/delete', userController.destroy)

router.get('/users/:id', userController.index)

module.exports = router;
