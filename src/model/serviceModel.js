const fs = require('fs-extra');
const path = require('path');
const database = path.join('src', 'database', 'database.json');

const open = () => {
    let content = fs.readFileSync(database, 'utf8');
    const service = JSON.parse(content);
    return service;
}

const store = (db) => {
  const content = JSON.stringify(db, null, 4);
  fs.writeFileSync(database, content, 'utf8');
}

const write = (db) => {
    const content = JSON.stringify(db);
    fs.appendFileSync(database, content, 'utf8');
    return db;
}

const Service = {
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
        const index = db.services.findIndex(service => service.id == id);
        db.services.splice(index, 1);
        store(db);
    }
}

module.exports = Service;