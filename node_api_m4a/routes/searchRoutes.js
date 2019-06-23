var express = require('express');
const searchRouter = express.Router();
const searchController = require('./../SearchController');
searchRouter.route("/")
    .get(searchController.getSearchResults);

module.exports.searchRouter = searchRouter;