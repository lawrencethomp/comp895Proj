import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {
    Http, 
    Response, 
    RequestOptions, 
    Headers
} from '@angular/http';
import { DataService } from '../data.service';
@Component({
  selector: 'app-generate-turf',
  templateUrl: './generate-turf.component.html',
  styleUrls: ['./generate-turf.component.css']
})
export class GenerateTurfComponent implements OnInit {

  constructor(
      private http: Http, 
      private dataService: DataService
  ) { }
  data: Object;
  ngOnInit() {
  }

  getContacts() {
    console.log('we are fucking talking');
    this.dataService.initContacts();
  }
  // send request to grab contacts
  contactRequest(){}
 

}
