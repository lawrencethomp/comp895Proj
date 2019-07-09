'use strict';

var app = require('../app'),
    request = require('supertest'),
    jest = require('jest');
var    expect = require('expect')
let contactSeed = require('./seeds/contactSeed');

var testContactFelixBiederman = contactSeed.contacts[0];
var testContactWillMenaker = contactSeed.contacts[1];
// test to perform get requests on an object

// TODO: create functions to wrap around tests for readability.

describe('Contact API Integration Tests', () => {
    describe('#GET / contacts', () => {
        test('Should get all contacts on request', async () => {
            const response = await request(app).get('/contacts');
            expect(response.status).toBe(200);
            expect(typeof response).toBe('object');
            expect(typeof response.body).toBe('object');
            expect(response.error).toBe(false);            
            });
        test('Should be able to get 25 objects', async () => {
            const response = await request(app).get('/contacts?pageNo=1&size=25');
            expect(response.body.message.length).toBe(25);

        });
        test('Different pages should have different content', async () => {
            const responseOne = await request(app).get('/contacts?pageNo=1&size=25');
            const responseTwo = await request(app).get('/contacts?pageNo=2&size=25');
            expect(responseOne.body.message[0]._id).not.toBe(responseTwo.body.message[0]._id)
        });
        test('Should be able to get an individual contact', async () => {
            const response = await request(app).get('/contacts/5be11f7aaf113737c430a683');
            const firstName = await response.body.firstName;
            const lastName = await response.body.lastName;
            const _testId = await response.body._id;
            expect(response.status).toBe(200);
            expect(firstName).toBe('Bethany');                    
            expect(lastName).toBe('Castle');
            expect(_testId).toBe('5be11f7aaf113737c430a683');
        })
    });    
    describe('#POST / contacts', ()=> {
        test('Should be able to create an individual contact', async () => {
            const response = await request(app).post('/contacts/').send(testContactFelixBiederman);
            const firstName = await response.body.firstName;
            const _id = await response.body._id;
            expect(firstName).toBe('Felix');
            // request(app).delete(`/contacts/${_id}`);
            const deleteResponse = await request(app).delete(`/contacts/${_id}`);
            expect(deleteResponse.status).toBe(200);
            expect(deleteResponse.body).toBe("Contact was deleted.");

        })
    });
    describe('#DELETE / contacts', () => {
        test('Should be able to delete an individual contact', async() => {
            const response = await request(app).post('/contacts/').send(testContactWillMenaker);
            const removedContact = await request(app).delete(
                `/contacts/${response.body._id}`
            );
            expect(removedContact.status).toBe(200);
            expect(removedContact.body).toBe("Contact was deleted.");
        });
        test('Deleted contacts should return errors', async() => {
            const response = await request(app).post('/contacts/').send(testContactWillMenaker);
            const removedContact = await request(app).delete(
                `/contacts/${response.body._id}`
            );
            expect(removedContact.status).toBe(200);
            expect(removedContact.body).toBe("Contact was deleted.");
            const deletedContact = await request(app).get(`/contacts/${response.body._id}`);
            expect(deletedContact.status).toBe(404);
            expect(deletedContact.body).toBe("No contact found.");     
        })
    })
});
