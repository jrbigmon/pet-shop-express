const serviceDatabase = require('../database/serviceDatabase.json')
const homeController = {
    index: (req, res) => {
        res.render('./home/index', {title: 'Home'})
    },
    service: (req, res) => {
        const servicos = serviceDatabase.services;
        res.render('./home/service', {title: 'service', servicos})
    },
    login: (req, res) => {
        res.render('./home/login', {title: 'login'})
    },
    contact: (req, res) => {
        res.render('./home/contact', {title: 'contact'})
    }
}
module.exports = homeController;