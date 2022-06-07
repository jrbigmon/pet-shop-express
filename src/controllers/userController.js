const userModel = require('../model/userModel');
const { v4: geratorId } = require('uuid');
const fs = require('fs-extra');
const path = require('path');
const {validationResult} = require('express-validator');

const userController = {
    show: (req, res) => {
        users = userModel.findAll();
        return res.render('./user/usersShow', {users, title: 'users' });
    }, 
    index: (req, res) => {
        const {email, password} = req.body;
        let user = userModel.login(email, password);
        if (user) {
           return res.render('./user/index', {user, title: 'users'});
        } else {
           return res.render('./home/login', {title: 'login'})
        }
    },
    login: (req, res) => {
        return res.render('./home/login', {title: 'login'})
    },
    createShow: (req, res) => {
        const errors = undefined;
        return res.render('./user/userCreate', {title:'userCreate', errors})  
    },
    create: (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.render('./user/userCreate', {title:'userCreate', errors: errors.mapped(), old: req.body}) 
        } else{
            const {name, email, password} = req.body;
            const img = "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="
            const newUser = {id:geratorId(), name, lastName: '', img, email, password};
            userModel.save(newUser);
            return res.redirect('/login');  
        }
    },
    update: (req, res) => {
        const {id} = req.params;
        const user = userModel.findById(id);
        const password = user.password;
        if(req.file){
            const img = req.file.filename;
            const {name, lastName, email, tel, date} = req.body;
            userModel.update(id, {id, name, lastName, img, tel, date, email, password});
        } else {
            const {name, lastName, img, email, tel, date} = req.body;
            userModel.update(id, {id, name, lastName, img, tel, date, email, password});
        }
        return res.redirect('/login/update/' +  id);
    },
    updateShow: (req, res) => {
        const {id} = req.params;
        const user = userModel.findById(id)
        return res.render('./user/userUpdate', {user, title: user.name});
    },
    destroy: (req, res) => {
        const {id} = req.params;
        const user = userModel.findById(id);
        const localFile = path.resolve('public', 'images', 'imgUser', user.img);
        fs.remove(localFile, err => {
            if (err) return console.error(err)
            console.log('success!')
          })
        userModel.delete(id)
        return res.redirect('/users/show');
    },
};
module.exports = userController;