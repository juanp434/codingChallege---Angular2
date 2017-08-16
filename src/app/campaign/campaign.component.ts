import { Component, OnInit } from '@angular/core';
import { CampaignsService } from '../campaigns.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  id:any;
  campaign:any;
  constructor(
    private service : CampaignsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.service.getCampaign(this.id).subscribe(data => {
      this.campaign = data;
      console.log(this.campaign);
      
    });
  }

}
