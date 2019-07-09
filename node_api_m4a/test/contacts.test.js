const assert = require('assert');
let contactSeed = require('./seeds/contactSeed');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chai = require('chai');
const Contact = require('../Contact');
const expect = chai.expect;

var felix = contactSeed.contacts[0];
console.log(`felx first name ${felix.firstName}` )
// TODO: add other unit tests to describe logic. 
    describe('Test Contacts', function() {
        it('Should Have a First Name', ()=> {
            assert.equal(felix.firstName, "Felix")
        })
        it('Should Have a Last Name', ()=> {
            assert.equal(felix.lastName, "Biederman")
        })
        it('Should Have a Phone Number', ()=> {
            assert.equal(felix.phonenumber, "540-833-9000");
        })
        it('Should Have an Email', ()=> {
            assert.equal(felix.email, "virgil@chapo.com");
        })
        
    });

