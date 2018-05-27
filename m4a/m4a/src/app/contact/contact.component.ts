import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { DataService } from '../data.service';
import { Input } from '@angular/core';
import { map } from 'rxjs/operators'; 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: Http) { }
  
  @Input()
  contactData: Object;
  @Input()
  arraySpot: number;
  @Input()
  arrayLength: number;
  baseURL = 'http://localhost:3000/contacts';
  contactURL = 'http://localhost:3000/contacts';
  ngOnInit() {

  }

  deleteContact(id){
    // return this.http
    //   .delete(`${this.baseURL}/${id}`)
    //   .subscribe(res => console.log(res.json()))
  }

  editContact(){

  }
}
