const userModel = require('../model/userModel');
const { v4: geratorId } = require('uuid');

const userController = {
    show: (req, res) => {
        users = userModel.findAll();
        return res.render('./user/usersShow', {users, title: 'users' });
    }, 
    index: (req, res) => {
        const {email, password} = req.body;
        let user = userModel.login(email, password);
        return res.render('./user/index', {user, title: 'users'});
    },
    login: (req, res) => {
        return res.render('./home/login', {title: 'login'})
    },
    create: (req, res) => {
        const {name, email, password} = req.body;
        const img = "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="
        const newUser = {id:geratorId(), name, lastName: '', img, email, password};
        userModel.save(newUser);
        return res.redirect('/login');  
    },
    createShow: (req, res) => {
        return res.render('./user/userCreate', {title:'userCreate'})  
    },
    update: (req, res) => {
        const {id} = req.params;
        const {name, lastName, img, email, password} = req.body;
        userModel.update({id, name, lastName, img, email, password});
        return res.redirect('/users/show');
    },
    updateShow: (req, res) => {
        const {id} = req.params;
        const user = userModel.findById(id)
        return res.render('./user/userUpdate', {user, title: user.name});
    },
    destroy: (req, res) => {
        const {id} = req.params;
        userModel.delete(id);
        return res.redirect('/users/show');
    },
};
module.exports = userController;