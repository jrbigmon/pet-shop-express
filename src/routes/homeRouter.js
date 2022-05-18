const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/', homeController.index)
router.get('/service', homeController.service)
router.get('/login', homeController.login)
router.get('/contact', homeController.contact)

module.exports = router;