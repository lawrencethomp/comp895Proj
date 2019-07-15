
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';
import {DomSanitizer} from '@angular/platform-browser';
import { ViewChild } from '@angular/core';

import { Contact } from '../../../models/contact.model';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  // TODO: Make campaign contacts be a Contact only type.
//   contactOne = new Contact(
//     'Lawrence',
//     'Thompson',
//     '86 Liberty Street',
//     'lawrencethomp@gmail.com',
//     '6033692893',
//     'He',
//     'cool',
//     '43.00885590000001, -71.44774689999997'
//     )

// contactTwo = new Contact(
//     'Mario',
//     'Thompson',
//     '9809 Conbes Drive',
//     'mario.thompson@hotmail.com',
//     '6033692895',
//     'He',
//     'great',
//     '29.4241219, -98.49362819999999'
// )

// contactThree = new Contact(
//     'Carlotta',
//     'Thompson',
//     '211 River Road',
//     'vze2157d@gmail.com',
//     '6033692894',
//     'She',
//     'nice',
//     '44.2805487, -69.7765604'
// )

// contactFour = new Contact(
//     'Leigh',
//     'Nicole',
//     '203 West Leaf',
//     'leighnicole@gmail.com',
//     '6033692893',
//     'SHE',
//     'hot',
//     '43.2081366, -71.53757180000002'
// )
  campaignContacts: any = [ ];
  // testContacts = [
  //   this.contactOne, this.contactTwo, this.contactThree, this.contactFour
  // ];
  currentContact: Object;
  spot = 0;

  constructor(private http: Http,
              private dataService: DataService,
              private sanitizer: DomSanitizer
  ) { }

  //https://www.google.com/maps/dir/33.93729,-106.85761/33.91629,-106.866761/33.98729,-106.85861

  apiLink = `https://www.google.com/maps/embed/v1/place?key=`;
  queryBuilder: string = this.dataService.queryBuilder;
  apiKey = `AIzaSyBFj0EJm83C3LBt4alXp7z5kBQycQKHXF4`;
  builtLink = `${this.apiLink}${this.apiKey}${this.queryBuilder}`;
  url: string = this.builtLink;
  urlSafe: SafeResourceUrl;


  // @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;

  ngOnInit() {
    this.getCampaign();
    this.parsefloatify();
    this.queryBuilder = this.buildQueryInformation(this.campaignContacts);
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.builtLink);
//    console.table(this.testContacts);
    // var mapProp = {
    //   center: new google.maps.LatLng(18.5793, 73.8143),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

      //  initMap() {
      //   this.map = new google.maps.Map(document.getElementById('map'), {
      //     center: {lat: -34.397, lng: 150.644},
      //     zoom: 8
      //   });
      // }

  getCampaign() {
    
    this.campaignContacts = this.dataService.campaignData;
    this.currentContact = this.campaignContacts[0]
  }

  parsefloatify() {
    for (var i = 0; i < this.campaignContacts.length; i++) {
      // this.testContacts[i]['fLat'] = parseFloat(this.campaignContacts[i].geoLocation_lat);
      // this.testContacts[i]['fLng'] = parseFloat(this.campaignContacts[i].geoLocation_lng);
      // console.log(`worked ${this.campaignContacts[i]['fLat']}`);
    }

  }

  /**
   * switchContact - Changes the currently displayed Contact
   * 
   * @param direction
   */
  switchContact(direction: String) {
    if (direction === 'forward') {
      this.spot++;
      this.currentContact = this.campaignContacts[this.spot];
    }
    else if (direction === 'backward') {
      this.spot--;
      this.currentContact = this.campaignContacts[this.spot];}
    return this.currentContact;
  }

  buildQueryInformation(campaignContacts) {
    let queryString: string = '';
    for  (var i = 0; i < campaignContacts.length; i++) {
      queryString += `/${campaignContacts[i].geoLocation_lat},${campaignContacts[i].geoLocation_lng}`;
    }
    return queryString;
  }

  /**
   *  Campaign data is passed to the function, this needs to be distributed right.
   *
   */


   /**
    * postNote - Will do a concatination of a string on a contact.
    * @param note
    */
   // TODO: add a note array with notes.
  postNote(note: String, addition: String) {
    // Add a date to the addition
    const date = new Date();
    addition = ` ${note} ${date.toLocaleDateString()} ${addition} \n\n`
    return addition;



  }

}
