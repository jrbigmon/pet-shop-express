const fs = require('fs');
const path = require('path');
const serviceDatabase = path.join('src', 'database', 'serviceDatabase.json');

const open = () => {
    let content = fs.readFileSync(serviceDatabase, 'utf8');
    const service = JSON.parse(content);
    return service;
}

const store = (db) => {
  const content = JSON.stringify(db);
  fs.writeFileSync(serviceDatabase, content, 'utf8');
}

const write = (db ,file) => {
    const content = JSON.stringify(db);
    fs.appendFileSync(serviceDatabase, content, 'utf8');
    return db;
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
        db.services.push(service);
        store(db); 
    },
    update: (id, service) => {
        const db = open();
        const index = db.services.findIndex(service => service.id == id)
        db.services[index] = service;
        store(db);
    },
    delete: (id) => {
        const db = open();
        const index = db.services.findIndex(service => service.id == id)
        db.services.splice(index, 1);
        store(db);
    }
}

module.exports = serviceModel;