const userLoggedIn = (req, res, next) => {
    const userAproved = req.session.userLoggedIn ? req.session.userLoggedIn: false
    if(userAproved.email === 'junior@gmail.com') {
        return next();
    }else {
        res.redirect('/login');
    }
}

module.exports = userLoggedIn;