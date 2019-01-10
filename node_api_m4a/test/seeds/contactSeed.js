var Contact = require('./../../Contact');
var CreateContact = require('../../Contact');
const { ObjectID } = require('mongodb');
const contactOneId = '5aafdd6f57d8fc1302edae20';
const contactTwoId = '5aafdd5f57d8fc1602edae20';
const contactThreeId = '5bafdd5f57d8fc1602edae20';
const contactFourId = '2bafdd5f57d8fc1602edae20';

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

const populateContacts = async () => {
    const contactOne = new Contact(contacts[0]);
    const contactTwo = new Contact(contacts[1]); ;
    const contactThree = new Contact(contacts[2]); ; 
    const contactFour = new Contact(contacts[3]);
    contacts[0] = contactOne;
    contacts[1] = contactTwo;
    contacts[2] = contactThree;
    contacts[3] = contactFour;
}
