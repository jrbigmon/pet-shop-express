const serviceModel = require('../model/serviceModel')
const { v4: geratorId } = require('uuid');

const serviceController = {
    index: (req, res) => {
        const {id} = req.params;
        const index = serviceModel.findById(id);
        console.log(index)
        res.render('./service/service', {index, title: 'Service'})
    },
    create: (req, res) => {
        const {name, valor, ativo, img, describ} = req.body;
        const newService = {id:geratorId, name, valor, ativo, img, describ};
        serviceModel.save(newService)
        res.render('')
    }
}

module.exports = serviceController;