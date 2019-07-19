var express = require('express');
const searchRouter = express.Router();
const searchController = require('./../controllers/SearchController');
searchRouter.route("/")
    .get(searchController.getSearchResults);

module.exports.searchRouter = searchRouter;