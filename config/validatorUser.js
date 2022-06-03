const {check, body} = require('express-validator')

const validatorUser = [
    check('name').notEmpty().withMessage('O nome não pode estar vazio!!').bail(), 
    check('email').notEmpty().withMessage('Deve conter um Email').bail(),
    check('password').isLength({min: 5, max: 10}).withMessage('A senha deve conter no mínimo 5 e no maximo 10 caracteres').bail(),
    body('password').isLength({ min: 5 }),
    body('passwordConfirm').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('As senhas não conferem');
        }
        return true;
    }).bail()
]

module.exports = validatorUser