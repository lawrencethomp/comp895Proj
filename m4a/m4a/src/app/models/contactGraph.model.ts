import {Contact} from './contact.model';


/* 
    The Contact Graph DataType.
*/

// TODO: Change contact to ContactNode
export class ContactGraph{
    vertices: Array<Contact>;
    AdjList;
    constructor(vertices) {
        this.vertices = vertices;
        this.AdjList = new Map();

    }

    /**
     *
     *  @function addVertices - The initial connection 
     *      @param verticeArray the Initial vertices to be added.
     */
    addVertices () {
        // for(let i = 0)
    };

    /**
     *  @function addVertex - Adds a Vertex to the Existing Array.
     *      @param {ContactNode} Node Adds the Node to the verticeArray.
     *
    */

    addVertex() {

    }

    /**
     *  @function addEdge - Adds an edge into a node.
     *      @param {ContactNode} startNode the first node to be connected.
     *      @param {ContactNode} endNode the second node to be connected.
     *      @returns {Edge} Edge the Edge between a and b.
    */

    addEdge(startNode, endNode) {


    }
    /**
     *  @function contains - checks if a node is currently in the graph.
     *      @param {ContactNode} checkNode
     *      @returns {boolean} whether or not there was a node.
     *
    */

    contains() {}

    /**
     *  @function hasEdge - looks for a connection between two nodes in a graph.
     *      @param {ContactNode} beginningContact The Contact to start with.
     *      @param {ContactNode} endingContact The Contact to end with.
     *      @returns {boolean} Whether or not there was an edge.
    */

    hasEdge() {}
}



export let contactOne = new Contact(
    'Lawrence',
    'Thompson',
    '86 Liberty Street',
    'lawrencethomp@gmail.com',
    '6033692893',
    'He',
    'cool',
    '43.00885590000001, -71.44774689999997'
    );

let contactTwo = new Contact(
    'Mario',
    'Thompson',
    '9809 Conbes Drive',
    'mario.thompson@hotmail.com',
    '6033692895',
    'He',
    'great',
    '29.4241219, -98.49362819999999'
);

let contactThree = new Contact(
    'Carlotta',
    'Thompson',
    '211 River Road',
    'vze2157d@gmail.com',
    '6033692894',
    'She',
    'nice',
    '44.2805487, -69.7765604'
);

let contactFour = new Contact(
    'Leigh',
    'Nicole',
    '203 West Leaf',
    'leighnicole@gmail.com',
    '6033692893',
    'SHE',
    'hot',
    '43.2081366, -71.53757180000002'
)

export let contacts : Array<Contact> = [
    contactOne, contactTwo, 
    contactThree, contactFour
];
