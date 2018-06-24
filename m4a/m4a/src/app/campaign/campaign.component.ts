import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  campaignContacts = [ ];

  constructor(private http: Http,
              private dataService: DataService
  ) { }

  ngOnInit() {
    this.getCampaign();
    console.log(this.campaignContacts);
  }

  getCampaign() {
    this.campaignContacts = this.dataService.campaignData;
  }

}
