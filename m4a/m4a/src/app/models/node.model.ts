import { Edge } from './edge.model';
import { Contact } from './contact';

export class Node {
    contact: Contact;
    edgeArray: Array<Edge>;
}
