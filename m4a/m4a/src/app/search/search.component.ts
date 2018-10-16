import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http: Http) { }
  contacts: Object = [];
  searchCompleted: boolean = false;
  ngOnInit() {
  }

  searchDB(firstName: any, lastName: any) {
    return this.http
      .request(`http://localhost:3000/search?first=${firstName}&last=${lastName}`)
      .subscribe((res) => {
        this.contacts = res.json();
        console.log(this.contacts);
        this.searchCompleted = true;
      });
  }
}
