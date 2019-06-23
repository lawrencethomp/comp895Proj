var express = require('express');
var app = express();
var db = require('./db');
var apiRouter = require('./index');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(apiRouter.apiRouter);

module.exports = app;