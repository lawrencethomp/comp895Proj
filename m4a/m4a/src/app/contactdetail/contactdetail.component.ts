import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import googleMapsClient = require('@google/maps');
import { GoogleMaps } from 'svelte-google-maps-embed';
import {
  BrowserModule,
  DomSanitizer
} from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';



googleMapsClient.createClient({
  key: 'AIzaSyBFj0EJm83C3LBt4alXp7z5kBQycQKHXF'
});


@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.css']
})
export class ContactdetailComponent implements OnInit {
  
  apiLink = `https://www.google.com/maps/embed/v1/place?key=`;
  queryBuilder = `&q=43.0057589,-71.4608326`  //`&q=36+High+Street,Berlin+NH`;
  apiKey = `AIzaSyBFj0EJm83C3LBt4alXp7z5kBQycQKHXF4`;
  builtLink = `${this.apiLink}${this.apiKey}${this.queryBuilder}`;
  url: string = this.builtLink;
  urlSafe: SafeResourceUrl;

  contactId: string;
  contactDetail: Object = { };



  constructor(private route: ActivatedRoute,
              private http: Http,
              private sanitizer: DomSanitizer
             ) {}

  ngOnInit() {
    this.contactId = this.route.snapshot.params.id;
    this.getContactDetail(this.contactId);
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  buildQuery(){ 
    const address = `&q=${this.contactDetail.address.split(' ').join('+')},`;
    const city = ``
    
  }
  getContactDetail(contactId) {
    return this.http
      .request(`http://localhost:3000/contacts/${contactId}`)
      .subscribe((res) => {
        this.contactDetail = res.json();
        console.log(this.contactDetail);
      });
  }
}
