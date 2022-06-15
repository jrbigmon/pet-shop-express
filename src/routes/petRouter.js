const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petController');
const storage = require('../../config/storage');
const validatorPet = require('../../config/validatorPet');
const adminVerify = require('../../config/adminVerify');

router.use(adminVerify);

router.get('/adm/pets', petsController.show);

router.get('/adm/pets/create', petsController.createShow);
router.post('/adm/pets/create', storage('imgPet').single('img'), validatorPet, petsController.create);

router.get('/adm/pets/update/:id', petsController.updateShow);
router.put('/adm/pets/update/:id',  storage('imgPet').single('img'), petsController.update);

router.delete('/adm/pets/delete/:id', petsController.destroy);

router.get('/adm/pets/:id', petsController.index)

module.exports = router