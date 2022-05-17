const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

// router.get('', userController.homePage)
router.get('/', userController.show)
router.get('/:id', userController.index)
router.post('/create', userController.create)
router.put('/:id', userController.update)
router.delete('/delete', userController.destroy)
module.exports = router;