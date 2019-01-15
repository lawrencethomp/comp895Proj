import {Contact} from './contact';

export class ContactGraph{
    noOfVertices;
    AdjList;
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();

    }
addVertex(v) {
    this.AdjList.set(v, []);
}
    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }
    printGraph() {
        var get_keys = this.AdjList.keys();
        for (var i of get_keys) {
            var get_values = this.AdjList.get(i);
            var conc = "";
        
        for (var j of get_values) {
            conc += j + " ";
        
        }
        console.log(i + " -> " + conc)

        }
    }

}

const contactOne = new Contact(
    "Lawrence",
    "Thompson",
    "86 Liberty Street",
    "lawrencethomp@gmail.com",
    "6033692893",
    "He",
    "cool",
    "43.00885590000001, -71.44774689999997"
    );

const contactTwo = new Contact(
    "Mario",
    "Thompson",
    "9809 Conbes Drive",
    "mario.thompson@hotmail.com",
    "6033692895",
    "He",
    "great",
    "29.4241219, -98.49362819999999"
);

const contactThree = new Contact(
    "Carlotta",
    "Thompson",
    "211 River Road",
    "vze2157d@gmail.com",
    "6033692894",
    "She",
    "nice",
    "44.2805487, -69.7765604"
);

const contactFour = new Contact(
    "Leigh",
    "Nicole",
    "203 West Leaf",
    "leighnicole@gmail.com",
    "6033692893",
    "SHE",
    "hot",
    "43.2081366, -71.53757180000002"
)

export let contacts = [
    contactOne, contactTwo, 
    contactThree, contactFour
];


let myGraph = new ContactGraph(contacts);

myGraph.printGraph();