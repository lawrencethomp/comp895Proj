import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { DataService } from '../data.service';
import { Input } from '@angular/core';
import { map } from 'rxjs/operators';
import moment = require('moment');
import request = require('request');
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
  _ref: any;
  living: boolean = true;
  ngOnInit() {

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

  editContact(){

  }
  parseAddress(target: string, callback) {
      request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=86+Liberty+Street,+Manchester,+NH&key=AIzaSyBFj0EJm83C3LBt4alXp7z5kBQycQKHXF4',
        json: true
      }, (error, response, body) => {
        if (error) {
        callback('Unable to connect to Google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find that address.');
      } else if (body.status === 'OK') {
        console.log('here');
        const lat = body.results[0].geometry.location.lat;
        console.log(lat);
        callback(undefined, {
          address : body.results[0].formatted_address
        });
      }
    //   return this.http
    //     .get('https://maps.googleapis.com/maps/api/geocode/json?address=86+Liberty+Street,+Manchester,+NH&key=AIzaSyBFj0EJm83C3LBt4alXp7z5kBQycQKHXF4')
    //   .subscribe(res => {
    //     console.log(res._body.results);
    //   },
    //   err => {
    //     console.log('Error occurred');
    //   }
    // );
    // }

});
  }}
