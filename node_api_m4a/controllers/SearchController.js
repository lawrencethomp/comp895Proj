var mongoose = require('mongoose');
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://lawrencethomp:dryboy88@ds143201.mlab.com:43201/";
var router = express.Router();
var bodyParser = require('body-parser');

var Contact = require('../Contact');

const search = (req, res) => {

    console.log(req.body);
    console.log('backend');
    var query = {};
    if (req.body.firstName) {
        query.firstName = req.body.firstName
    }

    if(req.body.lastName) {
        query.lastName = req.body.lastName
    }
    if (req.body.address) {
        query.address = req.body.address
    }
    if (req.body.phonenumber) {
        query.phonenumber = req.body.phonenumber
    }
    if(req.body.email) {
        query.email = req.body.email
    }
    if(req.body.city) {
        query.city = req.body.city
    }
    if(req.body.state) {
        query.state = req.body.state
    }
    if(req.body.zipcode) {
        query.zipcode = req.body.zipcode
    }
    Contact.find(
        query,
        function(err, contacts) {
            if (err) return res.status(500)
                .send("Problem finding contacts.");
            res.status(200).send(contacts);
    });
}
module.exports.searchController = {search};