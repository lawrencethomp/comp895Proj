var express = require('express');
const searchRouter = express.Router();
const searchController = require('./../controllers/SearchController');

searchRouter.route("/")
    .post(searchController.searchController.search);

module.exports.searchRouter = searchRouter;