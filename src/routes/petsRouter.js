const express = require('express')
const router = express.Router()
const petsController = require('../controllers/petsController')

router.get('/', petsController.petsList)
router.get('/:id', petsController.petIndex)
router.post('/create', petsController.petsCreated)
router.put('/update/:id', petsController.petsUpdated)
router.delete('/delete', petsController.petsDeleted)
module.exports = router