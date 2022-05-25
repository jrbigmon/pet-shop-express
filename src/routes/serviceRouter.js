const serviceController = require('../controllers/serviceController');
const express = require('express');
const router = express.Router();

router.get('/services/:id', serviceController.index);

router.get('/services/adm/create', serviceController.showCreate);
router.post('/services/adm/create', serviceController.create);

router.get('/services/adm/show', serviceController.showAdm);

router.get('/services/adm/update/:id', serviceController.showUpdate);
router.put('/services/adm/update/:id', serviceController.update);

router.get('/services/adm/delete/:id', serviceController.delete)
module.exports = router