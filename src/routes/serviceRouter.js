const serviceController = require('../controllers/serviceController');
const express = require('express');
const router = express.Router();
const storageDisk = require('../../config/storage');
const validatorService = require('../../config/validatorService');
const sessionLoggedIn = require('../../config/sessionLoggedIn');

router.use(sessionLoggedIn);

router.get('/services/:id', serviceController.index);

router.get('/adm/services/create', serviceController.showCreate);
router.post('/adm/services/create', storageDisk('imgService').single('img'), validatorService, serviceController.create);

router.get('/adm/services/show', serviceController.showAdm);

router.get('/adm/services/update/:id', serviceController.showUpdate);
router.put('/adm/services/update/:id', storageDisk('imgService').single('img'), serviceController.update);

router.delete('/adm/services/delete/:id', serviceController.destroy);

module.exports = router;