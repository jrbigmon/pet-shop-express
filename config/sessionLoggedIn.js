const userLoggedIn = (req, res, next) => {
    if(req.session.userLoggedIn) {
        res.locals.user = req.session.userLoggedIn;
        return next();
    }else {
        return res.redirect('/login');
    }
}

module.exports = userLoggedIn;