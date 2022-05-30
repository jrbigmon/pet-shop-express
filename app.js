const express = require('express');
const app = express();
const methodOverride = require('method-override')

let userRouter = require('./src/routes/userRouter');
let petRouter = require('./src/routes/petRouter');
let homeRouter = require('./src/routes/homeRouter');
let serviceRouter = require('./src/routes/serviceRouter');

app.use(methodOverride("_method"));

app.use(express.json()); // capture JSON of body 
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs'); // configuration of view engine ejs
app.set('views', './src/views');


app.use(express.static('public'));  // file in public folder view for client


app.use(homeRouter); // search home page in homeRouter
app.use(userRouter); // search routes of user
app.use(petRouter); // search routes of pets
app.use(serviceRouter)// search routes of service

app.use((req, res, next) => {
    return res.status(404).send('not-found');
}); // response for pages not found

app.listen(3000, () => {
    console.log('listening on');
}); // servidor running
