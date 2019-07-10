import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../services/data.service';
import { Input } from '@angular/core';
import { map } from 'rxjs/operators';
// import moment = require('moment');
// import request = require('request');
import * as _ from 'underscore';
import { Observable, observable } from 'rxjs';
import { apiUrl } from '../../../../../apiConfig';
import { Contact } from '../../../models/contact.model';
import { GetContactService } from '../../../services/contact/get-contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: Contact;
  constructor(private http: HttpClient,
              private dataService: DataService,
              private getContactService: GetContactService
              ) { }

  @Input()
  contactData: Object;
  @Input()
  arraySpot: number;
  @Input()
  arrayLength: number;
  baseURL = `${apiUrl}/contacts`;
  contactURL = `${apiUrl}/contacts`;
  _ref: any;
  living: boolean = true;
  campaign: boolean = false;
  triggerLengthChange: boolean = false;
  ngOnInit() {

  }
  // TODO: Change deleteContact to its own Service.
  deleteContact(id) {
    if (confirm('Are you sure you want to delete this contact?')) {
      alert('contact deleted');
      this.living = false;
      this.arrayLength --;
      this.dataService.contactsLengthServiceNo = this.arraySpot;
      this.dataService.triggerLengthChange = true;
      console.log(`changed length ${this.dataService.triggerLengthChange}`);
      this.getContactService.deleteContact(id)
        .subscribe(res => console.log(res));
    }
  }

  // TODO: Switch ChangeStatus so that it is its own Service or part of another
  changeStatus() {
    if (this.campaign === false) {
      this.dataService.addContact(this.contactData);
      console.log(this.dataService.campaignData);
      return this.campaign = true;
    }
    if (this.campaign === true) {
      this.dataService.campaignData.splice(
        _.indexOf(this.dataService.campaignData, _.findWhere(
            this.dataService.campaignData, { _id : this.contactData })), 1
      );
      console.log(this.dataService.campaignData);
      return this.campaign = false;
    }
  }


  // Create an Observable that will listen to the dataService
  observeArray = new Observable((observer) => {

    if (this.dataService.decreasedState === true) {
      // need to have an obj item that shows what array got deleted here.
      observer.next(this.arrayLength--);
    }

  })


  editContact(){}


}
