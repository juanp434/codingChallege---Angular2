import { Component, OnInit } from '@angular/core';
import { CampaignsService} from '../campaigns.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  pending:any;
  constructor(
    private service : CampaignsService
  ) { }

  ngOnInit() {
    this.service.getPendingCampaigns().subscribe(data => {
      this.pending = data;
    });
  }

}
