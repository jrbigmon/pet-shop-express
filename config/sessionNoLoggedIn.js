const sessionNoLoggedIn = (req, res, next) => {
    if(!req.session.userLoggedIn) {
        res.redirect('/login')
    } 
    next();
}
module.exports = sessionNoLoggedIn;