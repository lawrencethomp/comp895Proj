export class Contact {
    constructor(
        public firstName: string,
        public lastName: string,
        public address: string,
        public email: string,
        public phonenumber: string,
        public timeAdded: string,
        public pronoun: string,
        public additionalNotes: string,
        public addedBy: string,
        public lastEdited: string,
        public geoLocation: string,
    ) { }
}
