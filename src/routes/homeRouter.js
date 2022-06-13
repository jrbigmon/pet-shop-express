const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')


router.get('/', homeController.index)
router.get('/services', homeController.service)
router.get('/contact', homeController.contact)
router.get('/adm', homeController.showAdm);

module.exports = router;