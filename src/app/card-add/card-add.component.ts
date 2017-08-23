import { Component, OnInit } from '@angular/core';
import { CampaignsService} from '../campaigns.service';

export interface filter{
  status: string;
}
export interface Plan{
  currencySymbol: string,
  amount: string,
  currency: string;
}
@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {
  filters: filter[] = [];
  campaigns:any;
  newcurrencySymbol: String;
  newamount: String;
  newcurrency: String;
  newcity:String;
  newcountry: String;
  
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
  listOfPlans:any = [];
  locations:any = [];
  primaryMediaUrl:any;

  constructor(
    private service: CampaignsService
  ) { }

  ngOnInit() {
    this.service.getFilters().subscribe( data =>{
      this.filters = data;
    });

    this.service.getCampaigns().subscribe( data =>{
      this.campaigns = data;
    });
  }

  addForm(){

  }

  addPlan() {
    if (this.newamount && this.newamount && this.newcurrency) {

        let entry = {
          price: {
            'currencySymbol': this.newcurrencySymbol,
            'amount': this.newamount,
            'currency': this.newcurrency
          }
        };

        this.listOfPlans.push(entry);
        this.newcurrencySymbol = "";
        this.newamount = "";
        this.newcurrency = "";
    }
  }

  addLocation(){
    if (this.newcity && this.newcountry) {
      
      let entry = {
          'city': this.newcity,
          'country': this.newcountry
      };

      this.locations.push(entry);
      this.newcity = "";
      this.newcountry = "";
    }
  }

}
