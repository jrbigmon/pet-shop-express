const serviceController = require('../controllers/serviceController');
const express = require('express');
const router = express.Router();
const storageDisk = require('../../config/storage');
const middlewares = require('../../config/middlewares')

router.get('/services/:id', serviceController.index);

router.get('/services/adm/create', serviceController.showCreate);
router.post('/services/adm/create', storageDisk('imgService').single('img'), middlewares.validatorService, serviceController.create);


router.get('/services/adm/show', serviceController.showAdm);

router.get('/services/adm/update/:id', serviceController.showUpdate);
router.put('/services/adm/update/:id', storageDisk('imgService').single('img'), serviceController.update);


router.delete('/services/adm/delete/:id', serviceController.destroy)

module.exports = router