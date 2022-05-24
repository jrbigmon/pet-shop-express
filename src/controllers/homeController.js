const serviceModel = require('../model/serviceModel')

const homeController = {
    index: (req, res) => {
        const services = serviceModel.findAll();
        res.render('./home/index', {title: 'Home', services})
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