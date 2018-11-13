import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private http: Http) { }
  contacts: Object = [];
  searchCompleted: boolean = false;
  ngOnInit() {
  }

  searchDB(
            firstName: any,
            lastName: any,
            supportACA: any,
            supportM4A: any,
            incomeLevel: any,
            politicalView: any,
            voted: any) {
    return this.http
      .request(`http://localhost:3000/search?first=${firstName}&last=${lastName}&supportACA=${supportACA}&supportM4A=${supportM4A}&incomeLevel=${incomeLevel}&politicalView=${politicalView}&voted=${voted}`)
      .subscribe((res) => {
        this.contacts = res.json();
        console.log(`http://localhost:3000/search?first=${firstName}&last=${lastName}&supportACA=${supportACA}&supportM4A=${supportM4A}&incomeLevel=${incomeLevel}&politicalView=${politicalView}&voted=${voted}`);
        console.log(`first name ${firstName}`)
        console.log(`last name ${lastName}`)
        console.log(`supportACA ${supportACA}`)
        console.log(`supportM4A ${supportM4A}`)
        console.log(`incomeLevel ${incomeLevel}`)
        console.log(`politicalView ${politicalView}`)
        console.log(`voted ${voted}`)
        this.searchCompleted = true;
      });
  }
}
