const admController = require('../controllers/admController');
const express = require('express');
const router = express.Router();

router.get('/adm', admController.showAdm);

module.exports = router;