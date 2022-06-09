const express = require('express')
const router = express.Router()
const petsController = require('../controllers/petController')

router.get('/adm/pets', petsController.show)
router.post('/adm/pets/create', petsController.create)
router.put('/adm/pets/update/:id', petsController.update)
router.delete('/adm/pets/delete/:id', petsController.destroy)
router.get('/adm/pets/:id', petsController.index)
module.exports = router