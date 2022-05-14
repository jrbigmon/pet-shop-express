const express = require('express');
const app = express();
let userRouter = require('./src/routes/userRouter')
let petsRouter = require('./src/routes/petsRouter')
const path = require("path");

app.use(express.json()); // capture JSON of body 
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs'); // configuration of view engine ejs
app.set('views', path.resolve('src', 'views')) // search views in folder src / views

app.use(express.static('public'));  // file in public folder view for client

// app.get('/', (req, res) => {
//     res.render('index', {
//         name: "Vagner",
//         title: "User"
//     })
// });

app.use('/users', userRouter); // search routes of user
app.use('/pets', petsRouter); // search routes of pets

app.use((req, res, next) => {
    res.status(404).send('Página não encontrada')
}) // response for pages not found

app.listen(3000, () => {
    console.log('listening on')
}) // servidor running
