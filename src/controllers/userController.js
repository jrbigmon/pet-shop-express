let userDatabase = require('../database/userDatabase.json')

const userController = {
    homePage: (req, res) => {
        console.log("Home page")
        res.render('index')
    },
    userList: (req, res) => {
        let list = [];
        userDatabase.forEach(element => {
            list.push('name: ' + element.name + ' ' + 'id: ' + element.id)    
        });
        res.send(list);
    }, 
    userIndex: (req, res) => {
        const {id} = req.params
        let userIndex = userDatabase.find(element => element.id == id);
        if (userIndex == null) {
            res.send('User not found')
        }else {
            res.send(userIndex);
        }
    },
    userCreated: (req, res) => {
        const {name, height} = req.body;
        const newUser = ({id: userDatabase.length + 1, name, height})
        userDatabase.push(newUser)
        res.send(newUser);     
    },
    userUpdated: (req, res) => {
        const {id} = req.params
        let index = userDatabase.find(element => element.id == id)
        const {name, height} = req.body;
        userDatabase[index] = {id ,name, height}
        res.send(userDatabase[index])
    },
    userDeleteId: (req, res) => {
        const {id} = req.body;
        let index = userDatabase.findIndex(element => element.id == id)
        userDatabase.splice(index, 1);
        res.send(userDatabase)
    },
};
module.exports = userController;