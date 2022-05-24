const serviceController = require('../controllers/serviceController');
const express = require('express');
const router = express.Router();

router.get('/:id', serviceController.index);
router.get('/adm/create', serviceController.showCreate);
router.post('/adm/create', serviceController.create);

module.exports = router