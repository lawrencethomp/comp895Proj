
var CreateContact = require('../../Contact');


felix = CreateContact.create({firstName: "Felix",
    lastName: "Biederman",
    address: "Chapo's Trap House",
    phonenumber: '540-833-9000',
    email: "virgil@chapo.com",
    zipcode: "03104",
    geoLocation_lat: "43.042572",
    geoLocation_lng:"-71.467529",
    city: "Manchester",
    pronoun: "gamer",
    state: "NH"
    
})

// four contacts - populate fake data.
const contacts = [{
    firstName: "Felix",
    lastName: "Biederman",
    address: "Chapo's Trap House",
    phonenumber: '540-833-9000',
    email: "virgil@chapo.com",
    zipcode: "03104",
    geoLocation_lat: "43.042572",
    geoLocation_lng:"-71.467529"
},
{
    firstName: "Will",
    lastName: "Menaker",
    address: "Chapo's Trap House",
    phonenumber: '540-833-9000',
    email: "virgil@chapo.com",
    zipcode: "03104",
    geoLocation_lat: "43.042572",
    geoLocation_lng:"-71.467529"
},
{
    firstName: "Matt",
    lastName: "Christman",
    address: "Chapo's Trap House",
    phonenumber: '540-833-9000',
    email: "virgil@chapo.com",
    zipcode: "03104",
    geoLocation_lat: "43.042572",
    geoLocation_lng:"-71.467529"
},
{
    firstName: "Virgil",
    lastName: "Texas",
    address: "Chapo's Trap House",
    phonenumber: '540-833-9000',
    email: "virgil@chapo.com",
    zipcode: "03104",
    geoLocation_lat: "43.042572",
    geoLocation_lng:"-71.467529"
}
];

module.exports.contacts = contacts;
