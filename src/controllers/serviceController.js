const serviceModel = require('../model/serviceModel')
const { v4: geratorId } = require('uuid');

const serviceController = {
    index: (req, res) => {
        const {id} = req.params;
        const index = serviceModel.findById(id);
        res.render('./service/index', {index, title: 'Service'})
    },
    create: (req, res) => {
        const {name, valor, ativo, img, describ} = req.body;
        const service = {id:geratorId(), name, valor:"R$ " + valor, ativo, img, describ};
        serviceModel.save(service)
        res.redirect('/')
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
        const {name, valor, ativo, img, describ} = req.body;
        const serviceUpdate = {id, name, valor, ativo, img, describ};
        serviceModel.update(id, serviceUpdate);
        console.log(serviceUpdate)
        res.redirect('/');
    },
    showAdm: (req, res) => {
        const services = serviceModel.findAll()
        res.render('./service/serviceAdmShow', {title: 'ShowAdm', services})
    },
    delete: (req, res) => {
        const {id} = req.body;
        serviceModel.delete(id)
        res.redirect('/');
    }
}

module.exports = serviceController;