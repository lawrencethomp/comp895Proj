const express = require('express');

var contact = require('./routes/contactRoutes');
var search = require('./routes/searchRoutes');

const apiRouter = express.Router();
apiRouter.use("/contacts", contact.contactRouter);
apiRouter.use("/search", search.searchRouter);

module.exports.apiRouter = apiRouter;