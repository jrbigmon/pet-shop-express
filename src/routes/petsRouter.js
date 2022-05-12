const express = require('express')
const router = express.Router()
const petsController = require('../controllers/petsController')

router.get('/pets', petsController.petsList)
router.get('/pets/:id', petsController.petIndex)
router.post('/pets/create', petsController.petsCreated)


module.exports = router