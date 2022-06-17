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

const User = { 
    findByField: (input, value) => {
        const db = open();
        const user = db.users.find(user => user[input] == value)
        return user;   
    },

    findAll: () => {
        const db = open();
        return db.users;
    },

    findById: (id) => {
        const db = open();
        const usersSearch = db.users.find(user => user.id == id);
        return usersSearch;
    },

    save: (user) => {
        const db = open();
        db.users.push(user);
        store(db); 
    },

    update: (id, user) => {
        const db = open();
        const index = db.users.findIndex(user => user.id == id)
        db.users[index] = user;
        store(db);
    },

    delete: (id) => {
        const db = open();
        const index = db.users.findIndex(user => user.id == id);
        db.users.splice(index, 1);
        store(db);
    }
}

module.exports = User;