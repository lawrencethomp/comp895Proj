import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// import Rx from 'rxjs';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class DataService {
data: Object;
  constructor(private http: Http) { }
  getContacts() {
    // return this.http
    //   .get(`http://localhost:3000/contacts`)
    //   .do((res: Response) => {
    //     this.data = res.json();
    //     console.log(this.data);
    //     console.log(this.data[0].name);
    //     console.log(this.data[0].phone_number);
    //     return this.data;
    //   })
    //   .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
