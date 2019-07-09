import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetContactService } from '../../services/contact/get-contact.service';

// TODO: add preferences
// TODO: update response should support editing location.
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
      private getContactService: GetContactService
  ) { }

  ngOnInit() {
    this.contactId = this.route.snapshot.params.id;
    this.getContactDetail(this.contactId);
  }
  getContactDetail(contactId: String) {
    this.getContactService.getContact(contactId)
        .subscribe((res) => {
          this.contactInfo = res;
          console.log(this.contactInfo);
      });
  }
  editContact(form: NgForm) {
    this.getContactService.editContact(form, this.contactId)
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
