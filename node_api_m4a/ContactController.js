var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Contact = require('./Contact');
/*
    todo: separate routes from comments
    todo: switch to route logic
    todo: write up a comment logic.

*/
router.post('/', function(req, res){
    Contact.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        timeAdded: req.body.timeAdded,
        city: req.body.city,
        state: req.body.state,
        pronoun: req.body.pronoun,
        additionalNotes: req.body.additionalNotes,
        lastEdited: req.body.lastEdited,
        geoLocation_lat: req.body.geoLocation_lat,
        geoLocation_lng: req.body.geoLocation_lng,
        preferredName: req.body.preferredName,
        editedBy: req.body.editedBy,
        preferences : {
            votedInMidterms : req.body.votedInMidterms,
            politicalViews : req.body.politicalViews,
            supportM4A : req.body.supportM4A,
            supportACA: req.body.supportACA,
            incomeLevel: req.body.incomeLevel,
        },
        addedBy: req.body.addedBy,
    },
    function (err, contact){
        if (err) return res.status(500)
            .send("There was a problem adding the information to the database.");
        res.status(200).send(contact);
    });

});



// code probably goes here!
router.get('/', function (req, res) {
    var pageNo = parseInt(req.query.pageNo);
        var size = parseInt(req.query.size)
        var query = {}
        if (pageNo < 0 || pageNo === 0 ) {
            response = {
                        "error": true,
                        "message": "invalid page number, should start with 1"
                        };
            return res.json(response)
        }
        query.skip = size * (pageNo - 1);
        query.limit = size;
    Contact.count({},function(err, totalCount){
        if(err) {
            response = {
                "error" : true,
                "message": "Error fetching data"
            };
        }
        Contact.find({},{},query, function (err, contacts) {
            if (err) {
                response = {
                    "error" : true,
                    "message" : "Error fetching data"
                }
            } else {
                var totalPages = Math.ceil(totalCount/size)
                response = {
                    "error" : false,
                    "message" : contacts,
                    "pages" : totalPages
                };
            } return res.json(response);
        });
    })
});

router.get('/:id', function (req, res) {
    Contact.findById(req.params.id, function (err, contact) {
        if (err) return res.status(500).send("There was a problem finding the contact.");
        if (!contact) return res.status(404).send("No contact found.");
        res.status(200).send(contact);
    });
});

router.delete('/:id', function (req, res) {
    Contact.findByIdAndRemove(req.params.id, function (err, contact) {
        if (err) return res.status(500).send("There was a problem deleting the contact.");
        res.status(200).send("Contact "+ contact.name +" was deleted.");
    });
});

router.put('/:id', function (req, res) {
    Contact.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, contact) {
        if (err) return res.status(500).send("There was a problem updating the contact.");
        res.status(200).send(contact);
    });
});

module.exports = router;