 export class Contact {
    edge: Array<>;
    constructor(
        public firstName: string,
        public lastName: string,
        public address: string,
        public email: string,
        public phonenumber: string,
        public pronoun: string,
        public additionalNotes: string,
        public geoLocation: string,
    ) { }
}
