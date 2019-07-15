import { Contact } from './contact.model';

export class ContactSerializer {
    constructor() {};
    fromJson(json: any): Contact {
        const contact = new Contact();
        contact.firstName = json.firstName;
        contact.lastName = json.lastName;
        contact.address = json.address;
        contact.email = json.email;
        contact.phoneNumber = json.phoneNumber;
        contact.pronoun = json.pronoun;
        contact.additionalNotes = json.additionalNotes;
        contact.geoLocation_lat = json.geoLocation_lat;
        contact.geoLocation_lng = json.geoLocation_lng;
        contact.city = json.city;
        contact.state = json.state;
        contact.lastEdited = json.lastEdited;
        contact.zipcode = json.zipcode;
        contact.addedBy = json.addedBy;
        contact.timeAdded = json.timeAdded;
        contact.preferredName = json.preferredName;
        contact._id = json._id;

        return contact;
    }
    toJson(contact: Contact): any {
        return {
            firstName: contact.firstName,
            lastName: contact.lastName,
            address: contact.address,
            email: contact.email,
            phoneNumber: contact.phoneNumber,
            pronoun: contact.pronoun,
            additionalNotes: contact.additionalNotes,
            geoLocation_lat: contact.geoLocation_lat,
            geoLocation_lng: contact.geoLocation_lng,
            city: contact.city,
            state: contact.state,
            lastEdited: contact.lastEdited,
            zipcode: contact.zipcode,
            addedBy: contact.addedBy,
            timeAdded: contact.timeAdded,
            preferredName: contact.preferredName,
            _id: contact._id
        };
    }
}
