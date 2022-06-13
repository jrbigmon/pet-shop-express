const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petController')
const storage = require('../../config/storage');
const validatorPet = require('../../config/validatorPet')
const sessionLoggedIn = require('../../config/sessionLoggedIn')
// visualization all pets in format of table
router.get('/adm/pets', sessionLoggedIn, petsController.show);
// visualization page of pet create and method of creation 
router.get('/adm/pets/create', sessionLoggedIn, petsController.createShow);
router.post('/adm/pets/create', sessionLoggedIn, storage('imgPet').single('img'), validatorPet, petsController.create);
// visualization page of pet update and method of update
router.get('/adm/pets/update/:id', sessionLoggedIn, petsController.updateShow);
router.put('/adm/pets/update/:id',  sessionLoggedIn, storage('imgPet').single('img'), petsController.update);

router.delete('/adm/pets/delete/:id', sessionLoggedIn, petsController.destroy);

router.get('/adm/pets/:id', sessionLoggedIn, petsController.index)

module.exports = router