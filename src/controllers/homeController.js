const serviceModel = require('../model/serviceModel')

const homeController = {
    index: (req, res) => {
        const services = serviceModel.findAll();
        return res.render('./home/index', {title: 'Home', services})
    },
    service: (req, res) => {
        const servicos = serviceModel.findAll();
        return res.render('./home/services', {title: 'service', servicos})
    },
    contact: (req, res) => {
        return res.render('./home/contact', {title: 'contact'})
    },
}
module.exports = homeController;