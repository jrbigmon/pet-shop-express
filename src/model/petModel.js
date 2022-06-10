const fs = require('fs');
const path = require('path');
const database = path.join('src', 'database', 'database.json');

const open = () => {
    const content = fs.readFileSync(database, 'utf8');
    const pets = JSON.parse(content);
    return pets;
}
const store = (db) => {
    const content = JSON.stringify(db, null, 4);
    fs.writeFileSync(database, content, 'utf8');
}

const Pet = {
    findAll: () => {
        const db = open();
        return db.pets;
    },

    findById: (id) => {
        const db = open();
        const pet = db.pets.find(pet => pet.id == id);
        return pet;
    },

    findByField: (input, field) => {
        const db = open();
        const pet = db.pets.find(pet => pet[input] == field);
        return pet;
    },

    save: (pet) => {
        const db = open();
        db.pets.push(pet);
        store(db);
    },

    update: (id, pet) => {
        const db = open();
        const index = db.pets.findIndex(pet => pet.id == id);
        db.pets[index] = pet;
        store(db);
    },

    destroy: (id) => {
        const db = open();
        const index = db.pets.findIndex(pet => pet.id == id);
        db.pets.splice(index, 1);
        store(db);
    }
}

module.exports = Pet;