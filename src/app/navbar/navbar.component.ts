import { Component, OnInit, EventEmitter } from '@angular/core';
import { CampaignsService } from '../campaigns.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  campaigns:any;
  
  constructor(
    private service : CampaignsService
  ) { 
  }

  ngOnInit() {
    this.service.getCampaigns().subscribe(data => {
      this.campaigns = data;
    });
  }


}
