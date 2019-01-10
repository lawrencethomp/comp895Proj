var mongoose = require('mongoose');
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://lawrencethomp:dryboy88@ds143201.mlab.com:43201/";
var router = express.Router();
var bodyParser = require('body-parser');
var Contact = require('./Contact');

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

// need to make something that hits endpoints.

// 1st step: create something that has an exact search
    // going to use find one here
    // https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp
    // create something that works with the front end
        // something with a search section. search bar.



// next step: create something that has a state name function search & zipcode
module.exports = router;