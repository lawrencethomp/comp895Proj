import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactGraph } from './contactGraph';
import {contacts} from './contactGraph';
describe('Testing the Graph Model', () => {
  let model: ContactGraph;

  beforeEach(async(() => {
    model = new ContactGraph(contacts);
  }));
  
  it('Should have individual accessible nodes', function() {
      expect(Array.isArray(model.vertices)).toBe(true);
  });

  it('Should have available edges', function() {
      
  });

  it('Each edge should have a distance between them', function() {

  });

  it('Each Node can only be a Contact', function() {

  });

});
