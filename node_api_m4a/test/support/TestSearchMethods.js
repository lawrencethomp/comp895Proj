var app = require('./../../app');
var request = require('supertest');

const testSearch = async(query) => {
    return await request(app)
    .post('/search')
    .send(query);
};

module.exports = {
    testSearch: testSearch
}