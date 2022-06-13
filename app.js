const express = require('express');
const app = express(); // functions express

const methodOverride = require('method-override');
const requestLogs = require('./config/requestLogs');
const session = require('express-session');

let userRouter = require('./src/routes/userRouter');
let petRouter = require('./src/routes/petRouter');
let homeRouter = require('./src/routes/homeRouter');
let serviceRouter = require('./src/routes/serviceRouter');


app.use(session({
    secret: 'msg secret',
    resave: false,
    saveUninitialized: false,
})); // middleware for session
app.use(methodOverride("_method"));
app.use(express.static('public'));  // file in public folder view for client

app.use(express.json()); // capture JSON of body 
app.use(express.urlencoded({ extended: false })); // validation for request of body

app.set('view engine', 'ejs'); // configuration of view engine ejs
app.set('views', './src/views');

app.use(requestLogs); // middlewares of request logs access

app.use(homeRouter); // search home page in homeRouter
app.use(userRouter); // search routes of user
app.use(petRouter); // search routes of pets
app.use(serviceRouter);// search routes of service

app.use((req, res, next) => {
    res.status(404).send('not-found');
    next()
}); // response for pages not found

app.listen(3000, () => {
    console.log('listening on');
}); // servidor running