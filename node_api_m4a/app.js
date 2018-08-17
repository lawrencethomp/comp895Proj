var express = require('express');
var app = express();
var db = require('./db');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

var ContactController = require('./ContactController');
app.use('/contacts', ContactController);
module.exports = app;