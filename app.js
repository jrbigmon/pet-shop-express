const express = require('express');
const app = express();

let userRouter = require('./src/routes/userRouter');
let petRouter = require('./src/routes/petRouter');
let homeRouter = require('./src/routes/homeRouter');


app.use(express.json()); // capture JSON of body 
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs'); // configuration of view engine ejs
app.set('views', './src/views');


app.use(express.static('public'));  // file in public folder view for client


app.use(homeRouter); // search home page in homeRouter
app.use('/users', userRouter); // search routes of user
app.use('/pets', petRouter); // search routes of pets

app.use((req, res, next) => {
    res.status(404).send('Página não encontrada');
}); // response for pages not found

app.listen(3000, () => {
    console.log('listening on');
}); // servidor running
