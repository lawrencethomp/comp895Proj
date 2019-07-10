var app = require('./../../app');
var request = require('supertest');

const getAllContacts = async () => {
    return await request(app).get('/contacts');
};

const getPageOfContacts = async (pageNo, size) => {
    return await request(app)
                    .get(`/contacts?pageNo=${pageNo.toString()}&size=${size.toString()}`);
};

const getContact = async (_id) => {
    return await request(app)
                    .get(`/contacts/${_id}`);
};

const createContact = async (contact) => {
    return await request(app)
                    .post('/contacts/').send(contact);
};

const deleteContact = async (_id) => {
    return await request(app)
                    .delete(`/contacts/${_id}`);
};

const updateContact = async (_id, updatedContact) => {
    return await request(app)
                    .put(`/contacts/${_id}`)
                    .send(updatedContact);
}

module.exports = {
    getAllContacts,
    getPageOfContacts,
    getContact,
    createContact,
    deleteContact,
    updateContact
};