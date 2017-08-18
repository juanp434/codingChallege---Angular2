import { Component, OnInit } from '@angular/core';
import { CampaignsService } from '../campaigns.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    private router: Router
  ) {
      router.events.subscribe((val) => {
        this.ngOnInit(); 
      });
   }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.service.getCampaign(this.id).subscribe(data => {
      this.campaign = data;
    });
  }

}
