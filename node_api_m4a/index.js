const express = require('express');

var contact = require('./routes/contactRoutes');
var search = require('./routes/searchRoutes');
var bodyParser = require('body-parser');
const apiRouter = express.Router();
// apiRouter.use(bodyParser.urlencoded({extended:false}));
apiRouter.use(bodyParser.json());
apiRouter.use("/contacts", contact.contactRouter);
apiRouter.use("/search", search.searchRouter);

module.exports.apiRouter = apiRouter;