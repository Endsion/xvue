'use strict';
const express = require('express');
const ejs = require('ejs');
const config = require('../config');
const PORT = process.env.PORT || 5001;
const app = express();

app.set('views', config.rootDir);
app.set('view engine', 'html');

app.get('/', (req, res, next) => {
    res.type('html');
    res.render('index');
});
app.use(express.static(config.rootDir));
const http = require('http');
http.createServer(app).listen(PORT, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Listening on port ${PORT}`);
});

