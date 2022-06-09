const { v4: geratorId } = require('uuid');
const petModel = require('../model/petModel');


const petsController = {
    show: (req, res) => {
        const pets = petModel.findAll();
        return res.send(pets);
    },
    index: (req, res) => {
        const pet = petModel.findById(req.params.id);
        return res.send(pet); 
    },
    create: (req, res) => {
        const {name, petType, age, size} = req.body;
        const newPet = {id: geratorId(), name, petType, age, size};
        petModel.save(newPet);
        return res.send(newPet);
    },
    update: (req, res) => {
        const {id} = req.params;
        const {name, age} = req.body;
        const pet = {id, name, age};
        petModel.update(id, pet);
        return res.send(pet);
    },
    destroy: (req, res) => {
        const {id} = req.params;
        const petDestroy = petModel.destroy(id);
        return res.send(petDestroy);
    },
};

module.exports = petsController;