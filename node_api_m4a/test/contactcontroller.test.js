'use strict';



let contactSeed = require('./seeds/contactSeed');

let testMethods = require('./support/TestMethods');

let expectMethods = require('./support/ExpectMethods');
// TODO: see if destructing patterns can be implemented.

// test to perform get requests on an object

// TODO: create functions to wrap around tests for readability.
// TODO: update naming scheme to reflect industry standards.
// TODO: add tests to test around edge cases from book.

// const check200 =  (requestStatus) => {
//     return expect(requestStatus).toBe(200);
// };

// const checkError = (error, bool) => {
//     return expect(error).toBe(bool);
// };

// const isObject = (entity) => {
//     return expect(typeof entity).toBe('object');
// } 

// const checkPageLength = (page, pageLength) => {
//     return expect(page).toBe(pageLength);
// }

// const isNot = (entityOne, entityTwo) => {
//     return expect(entityOne).not.toBe(entityTwo);
// }

// const checkString = (string1, string2) => {
//     return expect(string1).toBe(string2);
// }

// const check500 = (response) => {
//     expect(response.status).toBe(500);
// }; 

// const check404 = (response) => {
//     expect(response.status).toBe(404);
// };

// const isEqual = ( entityOne, entityTwo) => {
//     expect(entityOne).toEqual(entityTwo);
// };

describe('Contact API Integration Tests', () => {
    describe('#GET / contacts', () => {
        test('Should get all contacts on request', async () => {
            const response = await testMethods.getAllContacts();
            expectMethods.check200(response.status);
            expectMethods.isObject(response);
            expectMethods.isObject(response.body);
            expectMethods.checkError(response.error, false);            
            });
        test('Should be able to get 25 objects', async () => {
            const response = await testMethods.getPageOfContacts(1, 25);
            expectMethods.checkPageLength(response.body.message.length, 25);
        });

        test('Different pages should have different content', async () => {
            const responseOne = await testMethods.getPageOfContacts(1, 25);
            const responseTwo = await testMethods.getPageOfContacts(2, 25);
            expectMethods.isNot(responseOne.body.message[0]._id, responseTwo.body.message[0]._id)
        });
        test('Should be able to get an individual contact', async () => {
            const response = await testMethods.getContact('5be11f7aaf113737c430a683');
            const firstName = await response.body.firstName;
            const lastName = await response.body.lastName;
            const _testId = await response.body._id;
            expectMethods.check200(response.status);
            expectMethods.checkString(firstName, 'Bethany');                    
            expectMethods.checkString(lastName,'Castle');
            expectMethods.checkString(_testId, '5be11f7aaf113737c430a683');
        })
    });
 
    describe('#POST / contacts', ()=> {
        test('Should be able to create an individual contact', async () => {
            const response = await testMethods.createContact(contactSeed.felix);
            const firstName = await response.body.firstName;
            const _id = await response.body._id;
            expectMethods.checkString(firstName, 'Felix');
            const deleteResponse = await testMethods.deleteContact(_id);
            expectMethods.check200(deleteResponse.status, 200);
            expectMethods.checkString(deleteResponse.body, "Contact was deleted.");
        })
        test('Should be able to reject a contact without first name', async () => {
            const response = await testMethods.createContact(contactSeed.badContactNoFirstName);
            expectMethods.checkString(response.text, 'There was a problem adding the information to the database.');
            expectMethods.check500(response);
        })
        test('Should be able to reject a contact without a last name', async() => {
            const response = await testMethods.createContact(contactSeed.badContactNoLastName);            
            expectMethods.checkString(response.text, 'There was a problem adding the information to the database.');
            expectMethods.check500(response);
        })
    });
    describe('#DELETE / contacts', () => {
        test('Should be able to delete an individual contact', async () => {
            const response = await testMethods.createContact(contactSeed.will);
            const removedContact = await testMethods.deleteContact(response.body._id);
            expectMethods.check200(removedContact.status);
            expectMethods.checkString(removedContact.body, "Contact was deleted.");
        });

        test('Deleted contacts should return errors', async () => {
            const response = await testMethods.createContact(contactSeed.will);
            const removedContact = await testMethods.deleteContact(response.body._id);

            expectMethods.check200(removedContact.status);
            expectMethods.checkString(removedContact.body, "Contact was deleted.");

            const deletedContact = await testMethods.getContact(response.body._id);
            
            expectMethods.check404(deletedContact);
            expectMethods.checkString(deletedContact.body, "No contact found.");     
        })
    })
    describe('# PUT / contacts', () =>{
        test('Should be able to change an individual contact', async () => {
            const response = await testMethods.createContact(contactSeed.will);

            const updatedRequest = await testMethods.updateContact(response.body._id, {firstName: "William"});
            expectMethods.checkString(updatedRequest.body.firstName, 'William');
            expectMethods.isEqual(response.body._id, updatedRequest.body._id);
        })
    })
});
