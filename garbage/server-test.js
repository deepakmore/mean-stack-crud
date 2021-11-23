const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const mongoose= require('mongoose');
const url= "mongodb://localhost:27017";

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function() {
    console.log('listening on 3000')
});

app.post('/quotes', (req, res) => {
    console.log(req.body);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})