import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document, location: Location, private router: Router){}
  title = 'app';

  route: string;
  checkLink() {
    this.route = location.pathname;
  console.log(this.route);
  console.log(this.document.location.href);
  }

}

