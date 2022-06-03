const {check, body} = require('express-validator')

const validatorService = [
    check('name').notEmpty().withMessage('O nome não pode estar vazio!').bail(), 
    check('value').notEmpty().withMessage('Deve conter um Preço!').bail(),
    check('active').notEmpty().withMessage('Escolha habilidato ou Desabilitado!').bail(),
    check('describ').notEmpty().withMessage('Coloque uma descrição!').bail(),
    body('img').custom((value, {req}) => {
        if (!value && !req.file) {
            throw new Error('Deve conter uma imagem!');
        }
        return true;
    })
]

module.exports = validatorService