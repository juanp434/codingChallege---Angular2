import { Component, OnInit } from '@angular/core';
import { CampaignsService} from '../campaigns.service';
import {PaginatePipe, PaginationControlsComponent, PaginationService} from 'ng2-pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  cards:any;
  filters:any;
  term: any;

  constructor(
    private service : CampaignsService,
    
  ) {
   }

  ngOnInit() {
    this.service.getCards().subscribe(data => {
      this.cards = data;
    });
  }

}
