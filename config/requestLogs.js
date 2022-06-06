const fs = require('fs')
const moment = require('moment')

const requestLogs = (req, res, next) => {
    let router = req.url;
    let method = req.method;
    let ip = req.ip;
    let status = req.status == undefined ? status = '200 OK' : status = req.status;
    let date = moment().format('DD MM YYYY HH:mm:ss');

    let data = `Rota: ${router}, Metodo HTTP: ${method}, IP: ${ip}, Status Servidor: ${status}, Data: ${date} \n\n`
    fs.appendFileSync('clientLogs.txt', data, 'utf8')
    return next();
}
module.exports = requestLogs;