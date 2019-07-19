import { ContactGraph } from './contactGraph.model';
import { Contact } from './contact.model';

export class ContactHandler {
    contactGraph = new ContactGraph();
    inputContacts: Array<Contact>;

    constructor(inputContacts: Array<Contact>) {
        this.inputContacts = inputContacts;
    }

    processContactsToGraph() {
        for (var i = 0; i < this.inputContacts.length; i++)
        {
            // perform a permutation of all contacts

            // push to the contactGraph
            // this.contactGraph.
        }
    }

    createInitialLocation() {}

    init() {}
}