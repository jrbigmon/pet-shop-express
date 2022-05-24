const fs = require('fs');
const path = require('path');

const open = () => {
    let content = fs.readFileSync(path.join(__dirname, '../database/serviceDatabase.json'), 'utf8');
    const service = JSON.parse(content);
    return service;
}

const store = (db) => {
  content = JSON.sringify(db);
  fs.writeFileSync('../database/serviceDatabase.json', content, 'utf8');
}
const serviceModel = {
    findAll: () => {
        const db = open();
        return db.services;
    },
    findById: (id) => {

    }, 
    save: (service) => {

    },
    update: (id, service) => {

    },
    delete: (id) => {

    }
}

module.exports = serviceModel;