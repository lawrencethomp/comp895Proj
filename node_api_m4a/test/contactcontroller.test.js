'use strict';

var app = require('../server'),
    chai = require('chai'),
    request = require('supertest');
var    expect = require('expect')
const nock = require('nock');


// test to perform get requests on an object
describe('Contact API Integration Tests', function(){
    describe('#GET / contacts', function() {
        it('Should get all contacts on request', function(done){
            request(app)
                .get('/contacts')
                .set('Accept', 'application/json')
                .end(function(err, res) {
                    expect(res.status).toBe(200);
                    expect(typeof res).toBe('object');
                    expect(typeof res.body).toBe('object');
                    expect(res.error).toBe(false);
                })
                done();
            });
        it('Should be able to get 25 objects', function(done){
            request(app)
                .get('/contacts?pageNo=1&size=25')
                .set('Accept', 'application/json')
                .end(function(err, res){
                    expect(res.body.message.length).toBe(25);
                })
            done();
        })
        it('Should be able to have different pages', function(done){
            let idOne;
            let idTwo;
            request(app)
                .get('/contacts?pageNo=1&size=25')
                .set('Accept', 'application/json')
                .end(function(err, res){
                    idOne = res.body.message[0]._id;                    
                })
            request(app)
                .get('/contacts?pageNo=2&size=25')
                .set('Accept', 'application/json')
                .end(function(err, res){
                    idTwo = res.body.message[0]._id;
                    expect(idOne).not.toBe(idTwo);
                });            
                done();    
        })
        it('Should be able to get an individual contact', function(){
            request(app)
                .get('/contacts/5be11f7aaf113737c430a683')
                .set('Accept', 'application/json')
                .end(function(err, res){
                    const firstName = res.body.firstName;
                    const lastName = res.body.lastName;
                    const _testId = res.body._id;
                    expect(firstName).toBe('Bethany');
                    expect(lastName).toBe('Castle');
                    expect(_testId).toBe('5be11f7aaf113737c430a683');                   
                })
        })
        })
    // TODO: separate tests so that create shows different stuff    
    describe('POST CONTACTS', function(){
        it('Should be able to create an individual contact', function() {
                request(app)
                .post('/contacts/')
                .set('Accept', 'application/json')
                .send({
                    'firstName': 'Lawrence',
                    'lastName': 'Thompson',
                })
                .end(function(err, res){
                    expect(res.status).toBe(200);
                    expect(res.body.firstName).toBe('Lawrence');
                
                })
            })
        })
    // TODO: Fix failing logic. believe that send needs to be different
    // TODO: Fix so that a contact is created.    
    describe('DELETE CONTACTS', function() {
        it('Should be able to delete an individual contact', function() {
            var id;
            request(app)
            .post('/contacts')
            .set('Accept', 'application/json')
            .send({
                'firstName': 'delete',
                'lastName': 'This'
            })
            .end(function(err, res){
                expect(res.status).toBe(200);
                expect(res.body.firstName).toBe('delete');
                id = res.body._id;
            })
            request(app)
            .delete(`/contacts/${id}`)
            .set('Accept', 'application/json')
            .end(function(err, res){
                expect(res.status).toBe(200);
            })

        });
    })
    });
