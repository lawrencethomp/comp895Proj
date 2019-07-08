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
  baseUrl = `http://localhost:8080/search?`;
  ngOnInit() {
  }

  buildSearchQuery(
    firstName: any,
    lastName: any,
/*     supportACA: any,
    supportM4A: any,
    incomeLevel: any,
    politicalView: any */
) {
let searchString: String = ``;
// console.log(`first name ${firstName}`);
// console.log(`last name ${lastName}`);
// console.log(`supportACA ${supportACA}`);
// console.log(`supportM4A ${supportM4A}`);
// console.log(`incomeLevel ${incomeLevel}`);
// console.log(`politicalView ${politicalView}`);
// console.log(`voted ${voted}`);
if (firstName !== '') {
  searchString = searchString + `first=${firstName}`;
}
if (lastName !== '') {
  searchString = searchString + `&last=${lastName}`;
}
// if (supportACA !== '') {
//   searchString = searchString + `&supportACA=${supportACA}`;
// }
// if (supportM4A !== '') {
//   searchString = searchString + `&supportM4A=${supportM4A}`;
// }
// if (incomeLevel !== '') {
//   searchString = searchString + `&incomeLevel=${incomeLevel}`;
// }
// if (politicalView !== '') {
//   searchString = searchString + `&politicalView=${politicalView}`;
// }
return  searchString;
}

  searchDB(
            firstName: any,
            lastName: any,
           /*  supportACA: any,
            supportM4A: any,
            incomeLevel: any,
            politicalView: any,
            voted: any */) {
              const searchStr: String = this.buildSearchQuery(firstName, lastName/* , supportACA,
                supportM4A, incomeLevel, politicalView */);
    return this.http
      .request(`http://localhost:8080/search?firstName=${firstName}&lastName=${lastName}`)
      .subscribe((res) => {
        this.contacts = res.json();
        console.log(`http://localhost:8080/search?firstName=${firstName}&lastName=${lastName}`);
        console.log(`first name ${firstName}`)
        console.log(`last name ${lastName}`)
        // console.log(`supportACA ${supportACA}`)
        // console.log(`supportM4A ${supportM4A}`)
        // console.log(`incomeLevel ${incomeLevel}`)
        // console.log(`politicalView ${politicalView}`)
        // console.log(`voted ${voted}`)
        this.searchCompleted = true;
      });
  }
}
