const express = require('express');
const app = express();
let userRouter = require('./src/routes/userRouter')
let petsRouter = require('./src/routes/petsRouter')
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views')
// app.set("views", path.join(__dirname, "/views"));
app.use(express.static(__dirname + 'public'));  

app.use('/', userRouter);
app.use('/', petsRouter);


app.listen(3000, () => {
    console.log('listening on')
})
