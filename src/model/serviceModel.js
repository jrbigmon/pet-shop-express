const fs = require('fs');
const path = require('path');
const { service } = require('../controllers/homeController');

const open = () => {
    let content = fs.readFileSync(path.join(__dirname, '../database/serviceDatabase.json'), 'utf8');
    const service = JSON.parse(content);
    return service;
}

const store = (db) => {
  content = JSON.sringify(db);
  fs.writeFileSync(path.join(__dirname, '../database/serviceDatabase.json'), content, 'utf8');
}

const serviceModel = {
    findAll: () => {
        const db = open();
        return db.services;
    },
    findById: (id) => {
        const db = open();
        const serviceSearch = db.services.find(service => service.id == id);
        return serviceSearch;
    }, 
    save: (service) => {
        const db = open();
        db.store(service)
        return db;
    },
    update: (id, service) => {

    },
    delete: (id) => {

    }
}

module.exports = serviceModel;