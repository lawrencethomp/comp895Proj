import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Node } from './node.model';
import { Edge } from './edge.model';
import { Contact } from './contact.model';
describe('Testing the Node Model', () => {
    let model: Node;
    beforeEach(async(() => {
        model = new Node(contactOne);
    }));

    it('Should have an available contact', function() {
        expect(model.contact instanceof Contact).toBe(true);
    });
    it('should have an array of edges', function() {
        // expect(model.edgeArray instanceof Array).toBe(true);
    });
});
