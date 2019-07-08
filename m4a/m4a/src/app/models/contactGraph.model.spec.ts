import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactGraph } from './contactGraph.model';
import {contacts} from './contactGraph.model';
import {Node} from './node.model';

describe('Testing the Graph Model', () => {
  let model: ContactGraph;
  let node1: Node;
  let node2: Node;
  let distance: Number;
  beforeEach(async(() => {
    model = new ContactGraph(contacts);
  }));

  it('Should have individual accessible nodes', function() {
      expect(Array.isArray(model.vertices)).toBe(true);
  });


  it('Can add a Node', function() {
    ContactGraph.addNode(node1);
    expect(ContactGraph.contains(node1)).toBe(true);
  });

  it('Can Remove a Node from search', function() {
    ContactGraph.addNode(node2);
    ContactGraph.contains(node2);
    ContactGraph.removeNode(node2);
    expect(ContactGraph.contains(node2)).toBe(false);
  });

  it('Can calculate distances between two Nodes', function() {
    distance = ContactGraph.calculateDistance(node1, node2);
    expect(distance).toBe(typeof Number);
  })


});
