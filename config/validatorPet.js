const {check, body} = require('express-validator')

const validatorPet = [
    check('name').notEmpty().withMessage('O seu pet não possui nome?!').bail(), 
    check('age').notEmpty().withMessage('Insira uma idade ao seu pet!').bail(),
    body('img').custom((value, {req}) => {
        if (!value && !req.file) {
            throw new Error('Deve conter uma imagem!');
        }
        return true;
    })
]

module.exports = validatorPet;