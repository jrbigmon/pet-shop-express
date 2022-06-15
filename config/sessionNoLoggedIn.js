const sessionNoLoggedIn = (req, res, next) => {
    if(!req.session.userLogegedIn) {
        res.redirect('/login')
    } 
    
    next();
}
module.exports = sessionNoLoggedIn;