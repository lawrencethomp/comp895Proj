export class Contact {
    // TODO: Actually use this.
    private _firstName: string;
    private _lastName: string;
    private _address: string;
    private _email: string;
    private _phonenumber: string;
    private _pronoun: string;
    private _additionalNotes: string;
    private _geoLocation: string;
    public objectID: string;
    constructor(
        firstName: string,
        lastName: string,
        address: string,
        email: string,
        phonenumber: string,
        pronoun: string,
        additionalNotes: string,
        geoLocation: string,
    ) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._address = address;
        this._email = email;
        this._phonenumber = phonenumber;
        this._pronoun = pronoun;
        this._additionalNotes = additionalNotes;
        this._geoLocation = geoLocation;
        this.objectID = this.makeid();
    }
    get firstName(): string {
        return this._firstName;
    }

    set firstName(name) {
        this._firstName = name;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(name) {
        this._lastName = name;
    }

    get address(): string {
        return this._address;
    }

    set address(address) {
        this._address = address;
    }

    get email(): string {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get phonenumber(): string {
        return this._phonenumber;
    }

    set phonenumber(phonenumber) {
        this._phonenumber = phonenumber;
    }

    get pronoun(): string {
        return this._pronoun;
    }

    set pronoun(pronoun) {
        this._pronoun = pronoun;
    }

    get additionalNotes(): string {
        return this._additionalNotes;
    }
    set additionalNotes(notes) {
        this._additionalNotes = notes;
    }

    get geoLocation(): string {
        return this._geoLocation;
    }

    set geoLocation(geoLocation) {
        this._geoLocation = geoLocation;
    }

    /***
     *  @function getLatitude
     *  @returns String
     */
    getLatitude(point: string) {
        const geo = this._geoLocation.split(', ');
        switch (point) {
            case 'latitude':
                return geo[0];
            case 'longitude':
                return geo[1];
            }
    }

    /***
     *  @function generateID - generate the ID for the contact.
     *  @returns String
    */
    makeid() {
        var text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 7; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
