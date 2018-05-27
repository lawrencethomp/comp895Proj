import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  constructor(private http: Http,
              private dataService: DataService
            ) { }
  contactsInitiated = false;
  contacts: Object = [
      {
        _id : "5acd5e502bf8bd15a6d3f40a",
        address : "36 High Street",
        email : "lawrencethomp@gmail.com",
        name : "Thompy_kun",
        phonenumber : "6033692893"
      },
      {
        _id : "5acd5e502bf8bd15a6d3f40a",
        address : "36 High Street",
        email : "lawrencethomp@gmail.com",
        name : "Thompy_kun",
        phonenumber : "6033692893"
      },
      {
        _id : "5acd5e502bf8bd15a6d3f40a",
        address : "36 High Street",
        email : "lawrencethomp@gmail.com",
        name : "Thompy_kun",
        phonenumber : "6033692893"
      },
      {
        _id : "5acd5e502bf8bd15a6d3f40a",
        address : "36 High Street",
        email : "lawrencethomp@gmail.com",
        name : "Thompy_kun",
        phonenumber : "6033692893"
      },
      {
        _id : "5acd5e502bf8bd15a6d3f40a",
        address : "36 High Street",
        email : "lawrencethomp@gmail.com",
        name : "Thompy_kun",
        phonenumber : "6033692893"
      }
  ];

  getContacts() {
    // return this.http
    //   .request(`http://localhost:3000/contacts`)
    //   .subscribe((res) => {
    //     this.contacts = res.json();
    //     console.log(this.contacts);
    //     console.log(this.contacts[0].name);
    //     console.log(this.contacts[0].phone_number);
    //   });
  }

  

  ngOnInit() {
    this.dataService.loadContacts.subscribe(contactsInitiated => {
        this.contactsInitiated = contactsInitiated;
        if (this.contactsInitiated === true) {
            this.getContacts();
        }
    });
  }

}
