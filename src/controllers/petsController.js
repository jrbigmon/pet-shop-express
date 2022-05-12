const petsDatabase = require('../database/petsDatabase.json')
const petsController = {
    petsList: (req, res) => {
        let list = []
        petsDatabase.forEach(element => {
          list.push('Id: ' + element.id + ', ' + 'name: ' + element.name + ', ' + 'pet Type: ' + element.petType)    
        })
        res.send(list)
    },
    petIndex: (req, res) => {
        const {id} = req.params;
        const petIndex = petsDatabase.find(element => element.id == id)
        res.send(petIndex)
    },
    petsCreated: (req, res) => {
        const {name, petType, age, size} = req.body;
        petsDatabase.push({id: petsDatabase.length+1, name, petType, age, size})
        res.send(petsDatabase)
    }

}

module.exports = petsController;