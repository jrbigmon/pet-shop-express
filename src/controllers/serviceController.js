const serviceModel = require('../model/serviceModel')
const { v4: geratorId } = require('uuid');
const fs = require('fs-extra')
const path = require('path')

const serviceController = {
    index: (req, res) => {
        const {id} = req.params;
        const index = serviceModel.findById(id);
        return res.render('./service/index', {index, title: 'Service'})
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
        return res.redirect('/services/adm/show')
    },
    showCreate: (req, res) => {
        return res.render('./service/serviceCreate', {title: 'create'})
    },
    showUpdate: (req, res) => {
        const {id} = req.params;
        const service = serviceModel.findById(id);
        return res.render('./service/serviceUpdate', {title: 'update', service})
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
        return res.redirect('/services/adm/show');
    },
    showAdm: (req, res) => {
        const services = serviceModel.findAll()
        return res.render('./service/serviceShow', {title: 'ShowAdm', services})
    },
    destroy: (req, res) => {
        const {id} = req.params;
        const service = serviceModel.findById(id);
        console.log(service.img)
        const localFile = path.resolve('public', 'images', 'imgService', service.img);
        fs.remove(localFile, err => {
            if (err) return console.error(err)
            console.log('success!')
          })
        serviceModel.delete(id)
        return res.redirect('/services/adm/show');
    }
}

module.exports = serviceController;