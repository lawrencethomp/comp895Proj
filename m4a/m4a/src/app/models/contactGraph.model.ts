import {Contact} from './contact.model';
import {Node} from './node.model';
import {Edge} from './edge.model';
import {CampaignService} from './../campaign.service';
import * as Graph from 'graph-data-structure';

/*
    The Contact Graph DataType.
*/

// TODO: Change contact to ContactNode
export class ContactGraph {
    vertices: Array<Node>;
    
    baseGraph = new Graph();
    constructor() {

    }

    calculateDistance() {}


    processContacts() {

    }
    /**
     *
     *  @function addVertices - The initial connection 
     *      @param verticeArray the Initial vertices to be added.
     */
    addVertices () {
        // for(let i = 0)
    }

    /**
     *  @function addVertex - Adds a Vertex to the Existing Array.
     *      @param {ContactNode} Node Adds the Node to the verticeArray.
     *
    */

    addVertex(node: Node) {
        this.vertices.push(node);
    }


    contains() {}

    addNode() {}

    removeNode() {}

    /**
     *  @function addEdge - Adds an edge into a node.
     *      @param {ContactNode} startNode the first node to be connected.
     *      @param {ContactNode} endNode the second node to be connected.
     *      @returns {Edge} Edge the Edge between a and b.
    */

    addEdge(startNode: Node, endNode: Node) {


    }
    /**
     *  @function contains - checks if a node is currently in the graph.
     *      @param {ContactNode} checkNode
     *      @returns {boolean} whether or not there was a node.
     *
    */

    /**
     *  @function hasEdge - looks for a connection between two nodes in a graph.
     *      @param {ContactNode} beginningContact The Contact to start with.
     *      @param {ContactNode} endingContact The Contact to end with.
     *      @returns {boolean} Whether or not there was an edge.
    */

    hasEdge(edge: Edge) {}

}
