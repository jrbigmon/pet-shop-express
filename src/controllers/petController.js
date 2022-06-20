const { v4: geratorId } = require('uuid');
const petModel = require('../model/petModel');
const fs = require('fs-extra');
const path = require('path');
const {validationResult} = require('express-validator')

const petsController = {
    index: (req, res) =>{
        const {id} = req.params;
        const pet = petModel.findById(id)
        res.render('./adm/pet/index', {title: pet.name, pet})
    },
    show: (req, res) => {
        const pets = petModel.findAll();
        return res.render('./adm/pet/petShow', {title:'pets show', pets});
    },
    createShow: (req, res) => {
        const errors = undefined;
        res.render('./adm/pet/petCreate', {title:'pets create', errors});
    },
    create: (req, res) => {
        const errors = validationResult(req)
        if(errors.isEmpty()) {
            const {name, age} = req.body;
            const img = req.file.filename;
            petModel.save({id: geratorId(), name, img, age});
            return res.redirect('/adm/pets');
        }else{
            res.render('./adm/pet/petCreate', {title:'pets create',  errors: errors.mapped(), old: req.body});
        }
    },
    updateShow: (req, res) => {
        const pet = petModel.findById(req.params.id);
        return res.render('./adm/pet/petUpdate', {title:'pet update', pet}); 
    },
    update: (req, res) => {
        const {id} = req.params;
        if(!req.file){
            const myPet = petModel.findById(id)
            const {name, age} = req.body;
            const pet = {id, name, img: myPet.img, age};
            petModel.update(id, pet);
            return res.redirect('/adm/pets');
        }else {
            const myPet = petModel.findById(id)
            const localFile = path.join('public', 'images', 'imgPet', myPet.img);
            fs.remove(localFile, err => {
                if (err) return console.error(err)
                    console.log('success!')
            })
            const {name, age} = req.body;
            const img = req.file.filename;
            const pet = {id, name, img, age};
            petModel.update(id, pet);
            return res.redirect('/adm/pets');
        }
    },
    destroy: (req, res) => {
        const {id} = req.params;
        const pet = petModel.findById(id)
        const localFile = path.join('public', 'images', 'imgPet', pet.img);
        fs.remove(localFile, err => {
            if (err) return console.error(err)
            console.log('success!')
          })
        petModel.destroy(id);
        return res.redirect('/adm/pets');
    },
};

module.exports = petsController;