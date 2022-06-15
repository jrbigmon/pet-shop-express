const userLoggedIn = (req, res, next) => {
    const userAproved = req.session.userLoggedIn ? req.session.userLoggedIn: false
    if(userAproved.email === 'junior@gmail.com') {
        res.locals.user = userAproved;
        return next();
    }else {
        res.redirect('/login');
    }
}

module.exports = userLoggedIn;