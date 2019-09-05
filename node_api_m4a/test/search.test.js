'use strict';

let contactSeed = require('./seeds/contactSeed');

let testSearchMethods = require('./support/TestSearchMethods')

let expectMethods = require('./support/ExpectMethods');

describe('Search API Integration Tests', ()=> {
    test('#GET First Name', async () => {
        const searchResponse = await testSearchMethods.testSearch({
            firstName: 'Lawrence'
        });
        expectMethods.isEqual(searchResponse.body[0].firstName, 'Lawrence');
    })
    test('Other names are not included', async () => {
        const searchResponse = await testSearchMethods.testSearch({
            firstName: 'Lawrence'
        });
        expectMethods.isNot(searchResponse.body[0].firstName, 'Mario');
    })
    test('Search results are 200 status', async () => {
        const searchResponse = await testSearchMethods.testSearch({
            firstName: 'Lawrence'
        });
        expectMethods.check200(searchResponse.status);
    })

})