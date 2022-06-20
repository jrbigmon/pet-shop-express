const userModel = require('../src/model/userModel');

const cookiesLoggedIn = (req, res, next) => {
    if(req.cookies.userEmail !== undefined){
        const user = userModel.findByField('email', req.cookies.userEmail)
        delete user.password;
        req.session.userLoggedIn = user;
        next();
    }else{
        next();
    }
}

module.exports = cookiesLoggedIn;