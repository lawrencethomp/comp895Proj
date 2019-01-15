import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { CampaignComponent } from './campaign.component';
import { DataService } from '../../../services/data.service';
import { Http } from '@angular/http';
import { Sanitizer } from '@angular/core';
let http = new Http();
describe('Campaign Component', ()=>{

it('Should have a Contact Array', () =>{
    let comp = new CampaignComponent(Http, DataService, Sanitizer);
    expect(comp.campaignContacts).toEqual(jasmine.any(Array));
});

it('Should be able to swtich the shown contacts', ()=>{
    let comp = new CampaignComponent(Http, DataService, Sanitizer);
    comp.campaignContacts = comp.testContacts;
    let contact1 = comp.currentContact;
    let contact2 = comp.switchContact('forward');
    expect(contact1).not.toEqual(contact2);
});

  it('Should be able to post notes', ()=>{
    let comp = new CampaignComponent(Http, DataService, Sanitizer);
    const noteBefore = 'ok this is epic';
    const note = comp.postNote('ok this is epic \n', 'i added this');
    expect(noteBefore).not.toEqual(note);
 
  });

  it('Should be able to render a campaign name', ()=>{});

});