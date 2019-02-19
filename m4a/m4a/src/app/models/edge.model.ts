/**
 *  @file edge.model.ts - The file for the Edge Model
 *  @author Lawrence Thompson
 *
 */

/**
 *
 * @class Edge
 * @classdesc The Edge class, which is an object used to express relations. Kept in the Node Obj.
 *
 */
 export class Edge {
    connectedNodeName: string;
    distance: number;
    NodeLat: string;
    NodeLng: string;


    constructor(connectedNodeName: string, distance: number, NodeLat: string, NodeLng: string ) {
        this.connectedNodeName = connectedNodeName;
        this.NodeLat = NodeLat;
        this.NodeLng = NodeLng; 
        this.distance = distance;
    }

}
