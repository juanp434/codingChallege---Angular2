import { Component, OnInit } from '@angular/core';
import { CampaignsService} from '../campaigns.service';
import { Search } from '../search';

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
    private search: Search
  ) {
    this.term = search.getTerm();
   }

  ngOnInit() {
    this.service.getCards().subscribe(data => {
      this.cards = data;
    });

  }

}
