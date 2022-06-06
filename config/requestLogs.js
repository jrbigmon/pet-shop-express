const fs = require('fs')
const moment = require('moment')

const requestLogs = (req, res, next) => {
    let date = moment().format('DD MM YYYY HH:mm:ss');

    let data = `Rota: ${req.url}, Metodo HTTP: ${ req.method}, IP: ${req.ip}, Status Servidor: ${res.statusCode}, Data: ${date} \n\n`
    
    fs.appendFileSync('clientLogs.txt', data, 'utf8')
    return next();
}
module.exports = requestLogs;