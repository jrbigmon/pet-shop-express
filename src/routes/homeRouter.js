const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const sessionNoLoggedIn = require('../../config/sessionNoLoggedIn');
const cookiesLoggedIn = require('../../config/cookiesLoggedIn');

const userLoggedIn = (req, res, next) => {
    if(req.session.userLoggedIn) {
        res.locals.user = req.session.userLoggedIn;
    }
    next();
}

router.use(cookiesLoggedIn);
router.use(userLoggedIn);
router.get('/', homeController.index);
router.get('/services', homeController.service);
router.get('/contact', homeController.contact);
router.get('/services/:id', sessionNoLoggedIn, homeController.serviceIndex);

module.exports = router;