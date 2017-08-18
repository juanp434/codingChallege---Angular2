import { Component, OnInit } from '@angular/core';
import { CampaignsService} from '../campaigns.service';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {
  cardTitle:any;
  availableQuantity:any;
  cardDescription:any;
  cardEndDate:any;
  cardStartDate:any;
  currentWorkflow:any;
  likes:any;
  shares:any;
  subscribers:any;
  totalRevenue:any;
  views:any;
  listOfPlans:any;
  locations:any;
  primaryMediaUrl:any;

  constructor(
    private service: CampaignsService
  ) { }

  ngOnInit() {
  }

  addForm(){

  }

}
