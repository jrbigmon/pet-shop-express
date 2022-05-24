const serviceModel = require('../model/serviceModel')

const homeController = {
    index: (req, res) => {
        res.render('./home/index', {title: 'Home'})
    },
    service: (req, res) => {
        const servicos = serviceModel.findAll();
        res.render('./home/services', {title: 'service', servicos})
    },
    login: (req, res) => {
        res.render('./home/login', {title: 'login'})
    },
    contact: (req, res) => {
        res.render('./home/contact', {title: 'contact'})
    }
}
module.exports = homeController;