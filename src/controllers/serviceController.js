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
    }
    
}

module.exports = serviceController;