import * as contactModel from './contact';

export class ContactGraph{
    contacts: contactModel.Contact[];
    //created by using locations to visit
    vertices = [];
    //created by measuring vector distance
    edges = [];
    //incremented with initialization.
    numberOfEdges = 0;
    constructor(contactList) {
        this.contacts = [
            contactList
        ];
        this.initializeRootNode();
       
    }

    //will allow the user to use their location as the root node
    // need to get the current location using API.
    initializeRootNode() {

    }

    initializeGraph() {
        //generate graph by using vectors for distance.
    }

    pushNode() {}
}