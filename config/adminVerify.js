const adminVerify = (req, res, next) => {
    const userAproved = req.session.userLoggedIn ? req.session.userLoggedIn: false
    if(userAproved.email === 'junior@gmail.com') {
        res.locals.user = req.session.userLoggedIn;
        return next();
    }else {
        res.redirect('/login');
    }
}

module.exports = adminVerify;