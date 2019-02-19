import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Node } from './node.model';
import { Edge } from './edge.model';
import { contactOne } from './contactGraph';
describe('Testing the Node Model', () => {
    let model: Node;
    beforeEach(async(() => {
        model = new Node(contactOne);
    }));
    it('should have an array of edges', function() {
        
    })

});
