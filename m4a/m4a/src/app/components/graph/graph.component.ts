import { Component, OnInit } from '@angular/core';

import {ContactGraph, contacts} from '../../models/contactGraph';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

contactOne = new Contact(
    "Lawrence",
    "Thompson",
    "86 Liberty Street",
    "lawrencethomp@gmail.com",
    "6033692893",
    "He",
    "cool",
    "43.00885590000001, -71.44774689999997"
    );

contactTwo = new Contact(
    "Mario",
    "Thompson",
    "9809 Conbes Drive",
    "mario.thompson@hotmail.com",
    "6033692895",
    "He",
    "great",
    "29.4241219, -98.49362819999999"
);

contactThree = new Contact(
    "Carlotta",
    "Thompson",
    "211 River Road",
    "vze2157d@gmail.com",
    "6033692894",
    "She",
    "nice",
    "44.2805487, -69.7765604"
);

contactFour = new Contact(
    "Leigh",
    "Nicole",
    "203 West Leaf",
    "leighnicole@gmail.com",
    "6033692893",
    "SHE",
    "hot",
    "43.2081366, -71.53757180000002"
);


myGraph : ContactGraph = new ContactGraph(contacts);

//myGraph.printGraph();

}
