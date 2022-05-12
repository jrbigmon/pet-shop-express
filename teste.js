const userDatabase = require('./src/database/userDatabase.json')


const {name, id, height} = userDatabase[0]

var valor
valor.push({
    name:name, 
    id:id, 
    height:height
})
console.log(valor)