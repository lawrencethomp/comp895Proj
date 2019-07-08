// // build up test library.
// const expect = require('expect');
// const request = require('supertest');
// const server = require('../server');
// // seed items.

// describe('Contact Controller Unit Tests', ()=> {

//     it('Should update a Contact', (done)=> {
//         request(server.app)
//         // ugh this should be the ID huh http://localhost:8080/contacts
//             .put(`/contacts/${items[0]._id.toString()}`)
//             .send({
//                 firstName : "Big Boy",
//                 phonenumber: 'i love games'
//             })
//             .expect(200)
//             .expect((res) => {
//                 expect(res.body.firstName).toBe("Big Boy")
//                 expect(first.body.phonenumber).toBe("i love games")
//             })
//             .end(done)
//     })
//     it('Should delete a Contact', ()=> {})
//     it('Should create a Contact', ()=> {})
//     it('Should read a Contact', ()=> {})

// })