const serviceController = require('../controllers/serviceController');
const express = require('express');
const router = express.Router();

router.get('/:id', serviceController.index);

module.exports = router