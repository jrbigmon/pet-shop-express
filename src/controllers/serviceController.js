const serviceModel = require('../model/serviceModel')
const { v4: geratorId } = require('uuid');

const serviceController = {
    index: (req, res) => {
        const {id} = req.params;
        const index = serviceModel.findById(id);
        res.render('./service/index', {index, title: 'Service'})
    },
    create: (req, res) => {
        const {name, value, active, img, describ} = req.body;
        const service = {id:geratorId(), name, value, active, img, describ};
        serviceModel.save(service)
        res.redirect('/services/adm/show')
    },
    showCreate: (req, res) => {
        res.render('./service/serviceRegister', {title: 'create'})
    },
    showUpdate: (req, res) => {
        const {id} = req.params;
        const service = serviceModel.findById(id);
        res.render('./service/serviceUpdate', {title: 'update', service})
    },
    update: (req, res) => {
        const {id} = req.params;
        const {name, value, active, img, describ} = req.body;
        const serviceUpdate = {id, name, value, active, img, describ};
        serviceModel.update(id, serviceUpdate);
        console.log(serviceUpdate)
        res.redirect('/');
    },
    showAdm: (req, res) => {
        const services = serviceModel.findAll()
        res.render('./service/serviceAdmShow', {title: 'ShowAdm', services})
    },
    destroy: (req, res) => {
        const {id} = req.body;
        serviceModel.delete(id)
        res.redirect('/services/adm/show');
    }
}

module.exports = serviceController;