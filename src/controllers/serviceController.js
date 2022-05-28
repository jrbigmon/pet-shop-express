const serviceModel = require('../model/serviceModel')
const { v4: geratorId } = require('uuid');

const serviceController = {
    index: (req, res) => {
        const {id} = req.params;
        const index = serviceModel.findById(id);
        res.render('./service/index', {index, title: 'Service'})
    },
    create: (req, res) => {
        if(req.file){
            const img = req.file.filename;
            const {name, value, active, describ} = req.body;
            var service = {id:geratorId(), name, value, active, img, describ};
        }else {
            var {name, value, img, active, describ} = req.body;
            var service = {id:geratorId(), name, value, active, img, describ};
        }
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
        if(req.file){
            const img = req.file.filename;
            const {name, value, active, describ} = req.body;
            var serviceUpdate = {id, name, value, active, img, describ};
        }else {
            const {name, value, img, active, describ} = req.body;
            var serviceUpdate = {id, name, value, active, img, describ};
        }
        serviceModel.update(id, serviceUpdate);
        res.redirect('/services/adm/show');
    },
    showAdm: (req, res) => {
        const services = serviceModel.findAll()
        res.render('./service/serviceAdmShow', {title: 'ShowAdm', services})
    },
    destroy: (req, res) => {
        const {id} = req.body;
        const imgLocal = serviceModel.findById(id)
        // Aplicar o path.remove https://github.com/jprichardson/node-fs-extra/blob/HEAD/docs/remove.md
        serviceModel.delete(id)
        res.redirect('/services/adm/show');
    }
}

module.exports = serviceController;