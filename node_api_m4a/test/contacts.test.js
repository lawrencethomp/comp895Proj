
let contactSeed = require('./seeds/contactSeed');

// var felix = contactSeed.contacts[0];

// console.log(`felx first name ${felix.firstName}` )
// TODO: add other unit tests to describe logic. 

    describe('Test Contacts', function() {
        test('Should Have a First Name', () => {
            expect(contactSeed.felix.firstName).toBe("Felix");
            expect(typeof contactSeed.felix.firstName).toBe('string');
            
        })
        test('Should Have a Last Name', () => {
            expect(contactSeed.felix.lastName).toBe("Biederman");
            expect(typeof contactSeed.felix.lastName).toBe('string');

        })
        test('Should Have a Phone Number', () => {
            expect(contactSeed.felix.phonenumber).toBe("540-833-9000");
            expect(typeof contactSeed.felix.phonenumber).toBe('string');
        })
        test('Should Have an Email', () => {
            expect(contactSeed.felix.email).toBe("virgil@chapo.com");
            expect(typeof contactSeed.felix.email).toBe('string');
        })
        test('Should have an address', () => {
            expect(contactSeed.felix.address).toBe("Chapo's Trap House");
            expect(typeof contactSeed.felix.address).toBe('string');
        })
        test('Should have a zipcode', () => {
            expect(contactSeed.felix.zipcode).toBe("03104");
            expect(typeof contactSeed.felix.zipcode).toBe('string');
        })
        test('Should have a Latitude', () => {
            expect(contactSeed.felix.geoLocation_lat).toBe("43.042572");
            expect(typeof contactSeed.felix.geoLocation_lat).toBe('string');
        })
        test('Should have a Longitude', () => {
            expect(contactSeed.felix.geoLocation_lng).toBe("-71.467529");
            expect(typeof contactSeed.felix.geoLocation_lng).toBe('string');
        })
        test('Should have a state', () => {
            expect(contactSeed.felix.state).toBe("NH");
            expect(typeof contactSeed.felix.state).toBe('string');
        })
        test('Should have an editedBy', () => {
            expect(contactSeed.felix.editedBy).toBe("LT");
            expect(typeof contactSeed.felix.editedBy).toBe('string');
        })
        test('Should have a lastEdited', () => {
            expect(contactSeed.felix.lastEdited).toBe("2019-07-09T17:11:01-04:00");
            expect(typeof contactSeed.felix.lastEdited).toBe('string');
        })
        test('Should have a pronoun', () => {
            expect(contactSeed.felix.pronoun).toBe("gamer");
            expect(typeof contactSeed.felix.pronoun).toBe('string');
        })
        test('Should have a preference', () => {
            expect(typeof contactSeed.felix.preferences).toBe('object');
        })

    });

