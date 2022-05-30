const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/', homeController.index)
router.get('/services', homeController.service)
router.get('/contact', homeController.contact)

module.exports = router;