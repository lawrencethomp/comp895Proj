import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphComponent } from './graph.component';
import { Contact } from '../../models/contact.model';
import { Node } from '../../models/node.model';

describe('GraphComponent', () => {
  let component: GraphComponent;
  let fixture: ComponentFixture<GraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have individual accessible nodes', function() {
    expect(Node.edges).toBe(typeof Array);
  });

  it('Should have available edges', function() {
    expect(Node.edges).toBe(true);
  });

  it('Each edge should have a distance between them', function() {
    expect(Node.getEdgeDistance(node)).toBe(typeof Integer)
  });

  it('Each Node has a Contact', function() {
    expect(Node.contact).toBe(typeof Contact);
  });

});
