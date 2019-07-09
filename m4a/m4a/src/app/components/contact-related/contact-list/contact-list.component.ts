import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../../../services/data.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from '../../../../../apiConfig';
import  {GetContactService} from '../../../services/contact/get-contact.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  constructor(private http: HttpClient,
              private dataService: DataService,
              private getContactService: GetContactService
            ) { }
  contactsInitiated = false;
  contacts: Object = [ ];
  loadingScreen: boolean = false;
  pageNo: number = 1;
  changingPage: boolean = false;
  triggerChange: boolean = false;
  direction: string;
    triggerLengthChange: boolean = false;

  // sends the contacts in length

  // contact list is going to need the observable. a million contacts straight up sucks to have subscribables.
  @Output()
  contactsLength: number;
  getContacts() {
    this.triggerLoading();
    this.getContactService.getAllContacts(this.pageNo)
      .subscribe((res) => {
        console.log('okay it reached here');
        this.triggerLoading();
        this.contacts = res;
        this.contactsLength = this.contacts['message'].length;
        const contLength = this.contacts['message'].length;
        console.table(this.contacts);
        this.contacts = this.contacts['message'];
        console.table(this.contacts);
            this.contactsLength = this.dataService.contactsLengthServiceNo;
            this.dataService.contactsLengthServiceNo = contLength;
            this.pageNo = this.dataService.pageNoServiceNo;
            console.log(` contact length ${this.dataService.contactsLengthServiceNo}`);
            console.log(`page no in service ${this.dataService.pageNoServiceNo}`);
      });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async triggerLoading() {
    if (this.loadingScreen === false){
      this.loadingScreen = true;
      return await this.sleep(500);
    }
    if (this.loadingScreen === true){
      this.loadingScreen = false;
      return await this.sleep(500);
    }
  }

  ngOnInit() {
    this.dataService.loadContacts.subscribe(contactsInitiated => {
        this.contactsInitiated = contactsInitiated;
        if (this.contactsInitiated === true) {
            this.getContacts();
        }
    });

    this.dataService.paginateData.subscribe(changingPage => {
      this.changingPage = changingPage;
      if (this.changingPage === true) {
          this.pageNo++;
          this.getContacts();
      }
    });
    this.dataService.sendContactLength.subscribe(triggerLengthChange => {
      
    })
  }

}
