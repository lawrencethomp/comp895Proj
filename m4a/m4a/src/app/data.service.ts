
import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Http } from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// import {Rx} from 'rxjs';
import {Observable} from 'rxjs/Observable';
import { Output } from '@angular/core';

@Injectable()
export class DataService {
data: Object;
contactsInitiated = false;
campaignData = [];

  constructor(private http: Http) { }
  getContacts() {
    // return this.http
    //   .get(`http://localhost:3000/contacts`)
    //   .do((res) => {
    //     this.data = res.json();
    //     console.log(this.data);
    //     console.log(`${this.data[0].name} fuck`);
    //     console.log(this.data[0].phone_number);
    //     return this.data;
    //   })
    //   .catch(this.handleError);
  }

  @Output() loadContacts: EventEmitter<boolean> = new EventEmitter();



  addContact(contact) {
    this.campaignData.push(contact);
  }

  // deleteContact()

  initContacts() {
    this.contactsInitiated = true;
    this.loadContacts.emit(this.contactsInitiated);
  }



  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  
}
