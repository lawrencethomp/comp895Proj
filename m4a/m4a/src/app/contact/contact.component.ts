import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: Http) { }
  contacts = this.getContacts();
  contactURL = 'http://localhost:3000/contacts';
  data: Object;
  ngOnInit() {
  }

  getContacts() {
    return this.http
      .request(`http://localhost:3000/contacts`)
      .subscribe((res: Response) => {
        this.data = res.json();
        console.log(this.data);
        console.log(this.data[0].name);
        console.log(this.data[0].phone_number);
      });
  }

}
