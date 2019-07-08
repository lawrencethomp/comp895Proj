import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
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
  getContactDetail(contactId: any) {
    return this.http
      .request(`http://localhost:8080/contacts/${contactId}`)
      .subscribe((res) => {
        this.contactInfo = res.json();
        console.log(this.contactInfo);
      });
  }
  editContact(form: NgForm) {
    const now: string = moment().format().toString();
    return this.http
      .put(`http://localhost:8080/contacts/${this.contactId}`, {
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
