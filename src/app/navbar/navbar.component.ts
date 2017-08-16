import { Component, OnInit, EventEmitter, OnChanges } from '@angular/core';
import { CampaignsService } from '../campaigns.service';
import { Search } from '../search';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  campaigns:any;
  term;
  constructor(
    private service : CampaignsService,
    private search: Search
  ) { 
  }

  ngOnInit() {
    this.service.getCampaigns().subscribe(data => {
      this.campaigns = data;
    });
  }

  ngOnChanges(){
    this.search.setTerm(this.term);
  }
  

}
