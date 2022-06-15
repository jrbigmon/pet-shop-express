const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

const userLoggedIn = (req, res, next) => {
    if(req.session.userLoggedIn) {
        res.locals.user = req.session.userLoggedIn;
    }
    next()
}

router.use(userLoggedIn)
router.get('/', homeController.index)
router.get('/services', homeController.service)
router.get('/contact', homeController.contact)
router.get('/adm', homeController.showAdm);

module.exports = router;