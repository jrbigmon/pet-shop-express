const {check, body} = require('express-validator')
const fs = require('fs')
const moment = require('moment')
const middlewares = {
    validatorUser: [
        check('name').notEmpty().withMessage('O nome não pode estar vazio!!').bail(), 
        check('email').notEmpty().withMessage('Deve conter um Email').bail(),
        check('password').isLength({min: 5, max: 10}).withMessage('A senha deve conter no mínimo 5 e no maximo 10 caracteres').bail(),
        body('password').isLength({ min: 5 }),
        body('passwordConfirm').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('As senhas não conferem');
            }
            return true;
        }).bail(),
    ],
    validatorService: [
        check('name').notEmpty().withMessage('O nome não pode estar vazio!').bail(), 
        check('value').notEmpty().withMessage('Deve conter um Preço!').bail(),
        check('img').notEmpty().withMessage('Deve conter uma Imagem!').bail(),
        check('active').notEmpty().withMessage('Escolha habilidato ou Desabilitado!').bail(),
        check('describ').notEmpty().withMessage('Coloque uma descrição!').bail()
    ],
    requestLogs: (req, res, next) => {
        let router = req.url;
        let method = req.method;
        let ip = req.connection.remoteAddress;
        let status;
        req.status == undefined ? status = '200 OK' : status = req.status;
        let date = moment().format('DD MM YYYY HH:mm:ss');

        let data = `Rota: ${router}, Metodo HTTP: ${method}, IP: ${ip}, Status Servidor: ${status}, Data: ${date} \n`
        fs.appendFileSync('clientLogs.txt', data, 'utf8')
        next();
    }
}
module.exports = middlewares;