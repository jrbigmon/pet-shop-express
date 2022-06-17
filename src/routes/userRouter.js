const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();
const storageDisk = require('../../config/storage');
const validatorUser = require('../../config/validatorUser');
const sessionLoggedIn = require('../../config/sessionLoggedIn');

router.get('/users/show', userController.show);

router.get('/login', userController.loginShow);
router.post('/login',userController.index);
router.get('/logout', sessionLoggedIn, userController.logOut);
// router.get('/login/:id', userController.index);

router.get('/users/create', userController.createShow);
router.post('/users/create', validatorUser, userController.create);

router.put('/login/update/:id', sessionLoggedIn, storageDisk('imgUser').single('img'),userController.update);
router.get('/login/update/:id', sessionLoggedIn, userController.updateShow);

router.delete('/login/delete/:id', sessionLoggedIn, userController.destroy);

// router.get('/users/:id', sessionLoggedIn, userController.index);

module.exports = router;
