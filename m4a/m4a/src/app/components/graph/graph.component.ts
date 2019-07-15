import { Component, OnInit } from '@angular/core';

import {ContactGraph} from '../../models/contactGraph.model';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }


// myGraph : ContactGraph = new ContactGraph(contacts);

// //myGraph.printGraph();

//
}
