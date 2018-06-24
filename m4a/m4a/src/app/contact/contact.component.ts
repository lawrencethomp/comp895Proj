import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { DataService } from '../data.service';
import { Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Contact } from '../contact';
import moment = require('moment');
import request = require('request');
import * as _ from 'underscore';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;
  constructor(private http: Http,
              private dataService: DataService
              ) { }

  @Input()
  contactData: Object;
  @Input()
  arraySpot: number;
  @Input()
  arrayLength: number;
  baseURL = 'http://localhost:3000/contacts';
  contactURL = 'http://localhost:3000/contacts';
  _ref: any;
  living: boolean = true;
  campaign: boolean = false;
  
  ngOnInit() {
    console.log(this.contactData);
  }

  deleteContact(id){
    if (confirm('Are you sure you want to delete this contact?')) {
      alert('contact deleted');
      this.living = false;
      this.arrayLength --;
      return this.http
        .delete(`${this.baseURL}/${id}`)
        .subscribe(res => console.log(res.json()))

    }

    // alert('contact deleted');
    // this.living = false;
    // this.arrayLength --;
  }

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

  editContact(){

  }

}
