let userDatabase = require('../database/userDatabase.json')
const userController = {
    homePage: (req, res) => {
        console.log("Home page")
        res.send('homePage')
    },
    userList: (req, res) => {
        let list = [];
        userDatabase.forEach(element => {
            list.push(element.name + ' ' + element.id)    
        });
        res.send(list);
    }, 
    index: (req, res) => {
        const {id} = req.params
        let index = userDatabase.find(element => element.name == id)
        if (index == null) {
            let index = userDatabase.find(element => element.id == id)
            res.send(index)
        }
        else if(index != null) {
            res.send(index)
        }
    },
    userCreated: (req, res) => {
        const {name, id, height} = req.body
        const newUser = {name, id, height}
        userDatabase.push(newUser)
        res.send(userDatabase)     
    },
    userUpdated: (req, res) => {
        const {id} = req.params
        const{name, height} = req.body
        userDatabase[id] = {name, id, height}
        res.send(userDatabase[id])
    },
    userDeleteId: (req, res) => {
        const id = req.body.id
        let index = userDatabase.findIndex(element => element.id == id)
        userDatabase.splice(index, 1);
        res.send(userDatabase)
    },
};
module.exports = userController;