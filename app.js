const express = require('express');
const app = express();
let userRouter = require('./src/routes/userRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', userRouter);
// app.use('/', petsRouter);


app.listen(3000, () => {
    console.log('listening on')
})
