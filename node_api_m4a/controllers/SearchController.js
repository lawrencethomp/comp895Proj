var mongoose = require('mongoose');
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://lawrencethomp:dryboy88@ds143201.mlab.com:43201/";
var router = express.Router();
var bodyParser = require('body-parser');
var Contact = require('../Contact');

const getSearchResults = (req, res) => {
    var firstName = req.query.firstName;
    var lastName = req.query.lastName;
    // var supportACA = req.query.supportACA;
    // var supportM4A = req.query.supportM4A;
    // var incomeLevel = req.query.incomeLevel;
    // var politicalView = req.query.politicalView;
    // var voted = req.query.voted;
    Contact.find(
        {"firstName": firstName,
        "lastName": lastName,
        // "preferences.supportACA" : supportACA,
        // "preferences.supportM4A" : supportM4A,
        // "preferences.incomeLevel": incomeLevel,
        // "preferences.politicalView": politicalView,
        // "preferences.voted": voted,
    },
        function(err, contacts) {
            if (err) return res.status(500)
                .send("Problem finding contacts.");
            res.status(200).send(contacts);
    });
}

router.get('/', function(req, res) {
    var firstName = req.query.firstName;
    var lastName = req.query.lastName;
    // var supportACA = req.query.supportACA;
    // var supportM4A = req.query.supportM4A;
    // var incomeLevel = req.query.incomeLevel;
    // var politicalView = req.query.politicalView;
    // var voted = req.query.voted;
    Contact.find(
        {"firstName": firstName,
        "lastName": lastName,
        // "preferences.supportACA" : supportACA,
        // "preferences.supportM4A" : supportM4A,
        // "preferences.incomeLevel": incomeLevel,
        // "preferences.politicalView": politicalView,
        // "preferences.voted": voted,
    },
        function(err, contacts) {
            if (err) return res.status(500)
                .send("Problem finding contacts.");
            res.status(200).send(contacts);
    });

 } );


// next step: create something that has a state name function search & zipcode
module.exports.getSearchResults = getSearchResults;