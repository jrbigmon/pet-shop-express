const express = require('express')
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/', serviceController.index)

module.exports = router;