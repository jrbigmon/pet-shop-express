const serviceController = require('../controllers/serviceController');
const express = require('express');
const router = express.Router();
const storageDisk = require('../../config/storage');
const validatorService = require('../../config/validatorService');
const sessionLoggedIn = require('../../config/sessionLoggedIn');

router.get('/services/:id', sessionLoggedIn, serviceController.index);

router.get('/services/adm/create', sessionLoggedIn, serviceController.showCreate);
router.post('/services/adm/create', sessionLoggedIn, storageDisk('imgService').single('img'), validatorService, serviceController.create);


router.get('/services/adm/show', sessionLoggedIn, serviceController.showAdm);

router.get('/services/adm/update/:id', sessionLoggedIn, serviceController.showUpdate);
router.put('/services/adm/update/:id', sessionLoggedIn, storageDisk('imgService').single('img'), serviceController.update);


router.delete('/services/adm/delete/:id', sessionLoggedIn, serviceController.destroy);

module.exports = router