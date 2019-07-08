var express = require('express');
var app = express();
var db = require('./db');
var apiRouter = require('./index');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(apiRouter.apiRouter);

module.exports = app;