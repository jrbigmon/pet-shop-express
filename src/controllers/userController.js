let userDatabase = require('../database/userDatabase.json')
const { v4: geratorId } = require('uuid');

const userController = {
    show: (req, res) => {
        let list = [];
        userDatabase.forEach(element => {
            list.push(`Id: ${element.id} - Name: ${element.name}`)
            // list.push('name: ' + element.name + ' ' + 'id: ' + element.id)    
        });
        res.send(list);
    }, 
    index: (req, res) => {
        const {id} = req.params
        let userIndex = userDatabase.find(element => element.id == id);
        if (userIndex == null) {
            res.send('User not found')
        }else {
            res.send(userIndex);
        }
    },
    create: (req, res) => {
        const {name, height} = req.body;
        const newUser = ({id:geratorId(), name, height})
        userDatabase.push(newUser)
        res.json(newUser)     
    },
    update: (req, res) => {
        const {id} = req.params
        let index = userDatabase.find(element => element.id == id)
        const {name, height} = req.body;
        userDatabase[index] = {id ,name, height}
        res.send(userDatabase[index])
    },
    destroy: (req, res) => {
        const {id} = req.body;
        let index = userDatabase.findIndex(element => element.id == id)
        userDatabase.splice(index, 1);
        res.send(userDatabase)
    },
};
module.exports = userController;