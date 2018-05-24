var express = require('express');
var app = express();
var db = require('./db');

var ContactController = require('./ContactController');
app.use('/contacts', ContactController);
module.exports = app;