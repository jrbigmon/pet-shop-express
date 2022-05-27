const serviceController = require('../controllers/serviceController');
const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.resolve('public', 'images', 'imgService');
        callback(null, folder);
    },
    filename: (req, file, callback) => {
        let imageName = Date.now() + file.originalname;
        callback(null, imageName);
    }
})

const fileUpload = multer({storage});

router.get('/services/:id', serviceController.index);

router.get('/services/adm/create', serviceController.showCreate);
router.post('/services/adm/create', fileUpload.single('img'), serviceController.create);

router.get('/services/adm/show', serviceController.showAdm);

router.get('/services/adm/update/:id', serviceController.showUpdate);
router.put('/services/adm/update/:id', serviceController.update);

router.delete('/services/adm/delete/:id', serviceController.destroy)
module.exports = router