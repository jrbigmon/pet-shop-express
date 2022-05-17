const petsDatabase = require('../database/petsDatabase.json')
const { v4: geratorId } = require('uuid');

const petsController = {
    show: (req, res) => {
        let list = []
        petsDatabase.forEach(element => {
            list.push(`Id: ${element.id} - Name: ${element.name} - Pet type: ${element.petType}`)
        //  list.push('Id: ' + element.id + ', ' + 'name: ' + element.name + ', ' + 'pet Type: ' + element.petType)    
        })
        res.send(list)
    },
    index: (req, res) => {
        const {id} = req.params;
        const petIndex = petsDatabase.find(element => element.id == id)
        if(petIndex == null) {
            res.send('user not found');
        }else {
            res.send(petIndex)
        }
    },
    create: (req, res) => {
        const {name, petType, age, size} = req.body;
        const newPet = {id: geratorId(), name, petType, age, size}
        petsDatabase.push(newPet)
        res.send(newPet);
    },
    update: (req, res) => {
        const {id} = req.params;
        let index = petsDatabase.find(element => element.id == id)
        const {name, petType, age, size} = req.body;
        petsDatabase[index] = {name, petType, age, size}
        res.send(petsDatabase[index])
    },
    destroy: (req, res) => {
        const {id} = req.body;
        const index = petsDatabase.find(element => element.id == id)
        petsDatabase.splice(index, 1)
        res.send(petsDatabase)
    },
};

module.exports = petsController;