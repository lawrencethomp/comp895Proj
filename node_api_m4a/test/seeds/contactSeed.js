
var Contact = require('../../Contact');


felix = new Contact({ firstName: "Felix",
    zipcode: "03104",
    lastName: "Biederman",
    address: "Chapo's Trap House",
    phonenumber: '540-833-9000',
    email: "virgil@chapo.com",
    geoLocation_lat: "43.042572",
    geoLocation_lng:"-71.467529",
    timeAdded: "2018-11-10T15:08:55-05:00",
    city: "Manchester",
    pronoun: "gamer",
    state: "NH",
    editedBy: "LT",
    preferredName: "Felix",
    lastEdited: "2019-07-09T17:11:01-04:00",
    preferences: {
        supportACA: "Support ACA",
        politicalViews: "Leftist",
        votedInMidterms: "Yes",
        supportM4A: "Strongly Support",
        incomeLevel: "Well Off"
    }
});

badContactNoFirstName = new Contact({ lastName: "Christman",
address: "Chapo's Trap House",
phonenumber: '540-833-9000',
email: "virgil@chapo.com",
zipcode: "03104",
geoLocation_lat: "43.042572",
geoLocation_lng:"-71.467529",
timeAdded: "2018-11-10T15:08:55-05:00",
city: "Manchester",
pronoun: "gamer",
state: "NH",
editedBy: "LT",
preferredName: "Felix",
lastEdited: "2019-07-09T17:11:01-04:00",
preferences: {
    supportACA: "Support ACA",
    politicalViews: "Leftist",
    votedInMidterms: "Yes",
    supportM4A: "Strongly Support",
    incomeLevel: "Well Off"
}});

badContactNoLastName = new Contact({
    firstName: "Matt",
    address: "Chapo's Trap House",
    phonenumber: '540-833-9000',
    email: "virgil@chapo.com",
    zipcode: "03104",
    geoLocation_lat: "43.042572",
    geoLocation_lng:"-71.467529",
    timeAdded: "2018-11-10T15:08:55-05:00",
    city: "Manchester",
    pronoun: "gamer",
    state: "NH",
    editedBy: "LT",
    preferredName: "Felix",
    lastEdited: "2019-07-09T17:11:01-04:00",
    preferences: {
        supportACA: "Support ACA",
        politicalViews: "Leftist",
        votedInMidterms: "Yes",
        supportM4A: "Strongly Support",
        incomeLevel: "Well Off"
    }
})

matt = new Contact({
    firstName: "Matt",
    lastName: "Christman",
    address: "Chapo's Trap House",
    phonenumber: '540-833-9000',
    email: "virgil@chapo.com",
    zipcode: "03104",
    geoLocation_lat: "43.042572",
    geoLocation_lng:"-71.467529",
    timeAdded: "2018-11-10T15:08:55-05:00",
    city: "Manchester",
    pronoun: "gamer",
    state: "NH",
    editedBy: "LT",
    preferredName: "Felix",
    lastEdited: "2019-07-09T17:11:01-04:00",
    preferences: {
        supportACA: "Support ACA",
        politicalViews: "Leftist",
        votedInMidterms: "Yes",
        supportM4A: "Strongly Support",
        incomeLevel: "Well Off"
    }
});

will = new Contact(
    {
        firstName: "Will",
        lastName: "Menaker",
        address: "Chapo's Trap House",
        phonenumber: '540-833-9000',
        email: "virgil@chapo.com",
        zipcode: "03104",
        geoLocation_lat: "43.042572",
        geoLocation_lng:"-71.467529",
        timeAdded: "2018-11-10T15:08:55-05:00",
        city: "Manchester",
        pronoun: "gamer",
        state: "NH",
        editedBy: "LT",
        preferredName: "Felix",
        lastEdited: "2019-07-09T17:11:01-04:00",
        preferences: {
            supportACA: "Support ACA",
            politicalViews: "Leftist",
            votedInMidterms: "Yes",
            supportM4A: "Strongly Support",
            incomeLevel: "Well Off"
        }
    }    
);

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

module.exports = {
    contacts,
    felix,
    matt,
    will,
    badContactNoFirstName,
    badContactNoLastName
}