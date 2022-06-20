const {check, body} = require('express-validator')

const validatorPet = [
    check('name').notEmpty().withMessage('O pet deve possuir um nome!').bail(), 
    check('age').notEmpty().withMessage('O pet deve possuir uma idade!').bail(),
    body('img').custom((value, {req}) => {
        if (!value && !req.file) {
            throw new Error('O pet deve possuir uma imagem!');
        }
        return true;
    })
]

module.exports = validatorPet;