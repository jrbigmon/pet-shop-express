const {body} = require('express-validator');
const userModel = require('../src/model/userModel');

const validatorUser = [
    body('name').notEmpty().withMessage('O nome não pode estar vazio!!').bail(), 
    body('email').notEmpty().withMessage('Deve conter um Email').custom((value)=>{
        const user = userModel.findByField('email', value);
        if(user){
            throw new Error('Esse Email já existe, tente outro!');
        }
        return true;
    }).bail(),
    body('password').isLength({min: 5, max: 10}).withMessage('A senha deve conter no mínimo 5 e no maximo 10 caracteres').bail(),
    body('passwordConfirm').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('As senhas não conferem');
        }
        return true;
    }).bail()
]

module.exports = validatorUser