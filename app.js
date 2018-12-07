const express = require('express');
const path = require('path')
const app = express();


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/styles'));
app.use(express.static(__dirname + '/public/scripts'));



app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render("index.pug")
});

app.listen(3000);


