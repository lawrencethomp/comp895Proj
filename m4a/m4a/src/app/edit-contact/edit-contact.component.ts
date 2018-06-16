import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import moment = require('moment');

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contactId: string;
  contactInfo: Object = { };
  constructor(
      private route: ActivatedRoute,
      private http: Http
  ) { }

  ngOnInit() {
    this.contactId = this.route.snapshot.params.id;
    this.getContactDetail(this.contactId);
  }
  getContactDetail(contactId) {
    return this.http
      .request(`http://localhost:3000/contacts/${contactId}`)
      .subscribe((res) => {
        this.contactInfo = res.json();
        console.log(this.contactInfo);
      });
  }
  editContact(form: NgForm) {
    const now: string = moment().format().toString();
    return this.http
      .put(`http://localhost:3000/contacts/${this.contactId}`, {
         firstName: form.value.firstName,
         lastName: form.value.lastName,
         address: form.value.address,
         email: form.value.email,
         phonenumber : form.value.phonenumber,
         lastEdited : now,
         pronoun: form.value.pronoun,
         additionalNotes: form.value.additionalNotes,
         editedBy: 'LT',
      })
      .subscribe(
        res => {
          console.log(res);
          console.log(name);
        },
        err => {
          console.log('Error occurred');
        });
  }
}
