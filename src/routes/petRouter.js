const express = require('express')
const router = express.Router()
const petsController = require('../controllers/petController')

router.get('/', petsController.show)
router.get('/:id', petsController.index)
router.post('/create', petsController.create)
router.put('/update/:id', petsController.update)
router.delete('/delete', petsController.destroy)
module.exports = router