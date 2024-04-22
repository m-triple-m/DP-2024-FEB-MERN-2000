// import express
const express = require('express');
const userRouter = require('./routers/userRouter');


// initialize express
const app = express();
const port = 5000;

// middleware
app.use( '/user', userRouter );

// endpoint
app.get('/' , (req, res) => {
    res.send('Response from express');
});

app.get('/add', (req, res) => {
    res.send('Response from add');
});

// delete
// update

// start server
app.listen(port, () => { console.log('server started'); });