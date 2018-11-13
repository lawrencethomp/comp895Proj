
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';
import {DomSanitizer} from '@angular/platform-browser';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  campaignContacts: any = [ ];

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
    console.table(this.campaignContacts);
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
  }

  parsefloatify() {
    for (var i = 0; i < this.campaignContacts.length; i++) {
      this.campaignContacts[i]["fLat"] = parseFloat(this.campaignContacts[i].geoLocation_lat);
      this.campaignContacts[i]["fLng"] = parseFloat(this.campaignContacts[i].geoLocation_lng);
      console.log(`worked ${this.campaignContacts[i]["fLat"]}`);
    }

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

}
