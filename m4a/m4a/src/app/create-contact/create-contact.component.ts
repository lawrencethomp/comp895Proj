import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response} from '@angular/http';
import moment = require('moment');
import request = require('request');
import { first } from 'rxjs/operators/first';
@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  contactLat: string;
  contactLng: string;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  // mainCreate(form: NgForm) {
  //   let lat;
  //   let lng;
  //   console.log(lat);
  //   console.log(lng);
  //   while (lat === undefined) {
  //       lat = this.parseAddress('lat', 'callback');
  //       console.log(lat);
  //     }

  //   while (lng === undefined) {
  //     lng = this.parseAddress('lng', 'callback');
  //     console.log(lng);
  //   }
  //   if (lat && lng !== undefined) {
  //     console.log(lat);
  //     this.createContact(form);
  // }
  // }

 async createContact(form: NgForm) {
    const lat = this.contactLat;
    const lng = this.contactLng;
    const now: string = moment().format().toString();
    // const lat = this.parseAddress('lat', 'callback');
    // const lng = this.parseAddress('lng', 'callback');
    return this.http
    .post(`http://localhost:3000/contacts`, {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: form.value.address,
      phonenumber: form.value.phonenumber,
      email: form.value.email,
      city: form.value.city,
      state: form.value.state,
      timeAdded: now,
      pronoun: form.value.pronoun,
      additionalNotes: form.value.additionalNotes,
      geoLocation_lat: lat,
      geoLocation_lng: lng,
      addedBy: 'LT',
    })
    .subscribe( res => {
        console.log(res);
      },
      err => {
        console.log('Error occurred');
      }
    );
  }

  geocodeAddressBuilder(form: NgForm) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?`;
    const address = `address=${form.value.address.split(' ').join('+')},`;
    const city = `+${form.value.city.split(' ').join('+')},`;
    const state = `+${form.value.state.toUpperCase()}`;
    const key = `&key=AIzaSyBFj0EJm83C3LBt4alXp7z5kBQycQKHXF4`;
    const geocodeCall = `${url}${address}${city}${state}${key}`;
    console.log(geocodeCall);
    return geocodeCall;

  }

  async parseAddress(form: NgForm, callback: any) {
    request({
      url: this.geocodeAddressBuilder(form),
      json: true
    }, (error: any, response: any, body: any) => {
      if (error) {
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status === 'OK') {
      console.log('here');
      this.contactLat = body.results[0].geometry.location.lat;
      this.contactLng = body.results[0].geometry.location.lng;
      this.createContact(form);
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
}

}
