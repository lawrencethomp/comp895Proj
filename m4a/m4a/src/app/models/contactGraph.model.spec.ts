import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactGraph } from './contactGraph.model';
import {Contact} from './contact.model';
import {Node} from './node.model';
import {contact1, contact2, contact3, contact4, contact5} from './contact.seed';

fdescribe('Testing the Graph Model', () => {
  let model: ContactGraph;
  let node1: Node;
  let node2: Node;
  let distance: Number;
  beforeEach(async(() => {
    model = new ContactGraph();
  }));

  it('Should have individual accessible nodes', function() {
      expect(Array.isArray(model.vertices)).toBe(true);
  });


  it('Can add a Node', function() {
    model.addNode(node1);
    expect(model.contains(node1)).toBe(true);
  });

  // it('Should have a base graph', function() {
  //   model.
  // });

  it('Can Remove a Node from search', function() {
    model.addNode(node2);
    model.contains(node2);
    model.removeNode(node2);
    expect(model.contains(node2)).toBe(false);
  });

  it('Can calculate distances between two Nodes', function() {
    distance = model.calculateDistance(node1, node2);
    expect(distance).toBe(typeof Number);
  })


});
