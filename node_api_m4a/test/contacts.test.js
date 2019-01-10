const assert = require('assert');
let contactSeed = require('./seeds/contactSeed');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chai = require('chai');
const Contact = require('../Contact');
const expect = chai.expect;

var felix = Contact({
    firstName: "Felix",
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
});
console.log(`felx first name ${felix.firstName}` )
    describe('Test Contacts', function() {
        it('Should Have a First Name', ()=> {
            console.log(` got felix ${felix}`);
            console.log(felix.firstName)
            assert.equal(felix.firstName, "Felix")
        })
        it('Should Have a Last Name', ()=> {
            console.log(felix.lastName)
            assert.equal(felix.lastName, "Biederman")
        })
        it('Should Have a Phone Number', ()=> {
            console.log(felix.phonenumber)
            assert.equal(felix.phonenumber, "540-833-9000");
        })
        it('Should Have an Email', ()=> {
            console.log(felix.email)
            assert.equal(felix.email, "virgil@chapo.com");
        })
        
    });



