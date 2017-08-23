import { Component, OnInit } from '@angular/core';
import { CampaignsService} from '../campaigns.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmComponent } from '../confirm/confirm.component';

export interface ConfirmModel {
  title:string;
  message:string;
}
export interface filter{
  status: string;
}
@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})

export class CardEditComponent implements OnInit {
  card:any;
  id:any;
  filters: filter[] = [];
  campaigns:any;
  newcurrencySymbol: String;
  newamount: String;
  newcurrency: String;
  newcity:String;
  newcountry: String;

  cardTitle:any;
  campaignId:any;
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
    private service: CampaignsService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService:DialogService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getCard(this.id).subscribe( snapshot => {
      this.cardTitle= snapshot.cardTitle;
      this.primaryMediaUrl = snapshot.primaryMediaUrl;
      this.availableQuantity = snapshot.availableQuantity;
      this.cardDescription = snapshot.cardDescription;
      this.cardEndDate = snapshot.cardEndDate;
      this.cardStartDate = snapshot.cardStartDate;
      this.currentWorkflow = snapshot.currentWorkflow;
      this.likes = snapshot.likes;
      this.shares = snapshot.shares;
      this.subscribers = snapshot.subscribers;
      this.totalRevenue = snapshot.totalRevenue;
      this.views = snapshot.views;
      this.listOfPlans = snapshot.listOfPlans;
      this.locations = snapshot.locations;
      this.campaignId = snapshot.campaignId;
    });

    this.service.getFilters().subscribe( data =>{
      this.filters = data;
    });

    this.service.getCampaigns().subscribe( data =>{
      this.campaigns = data;
    });
    
  }

  editForm(){
    this.card = {
      cardTitle: this.cardTitle,
      campaignId: this.campaignId,
      primaryMediaUrl: this.primaryMediaUrl,
      availableQuantity: this.availableQuantity,
      cardDescription: this.cardDescription,
      cardEndDate: this.cardEndDate,
      cardStartDate: this.cardStartDate,
      currentWorkflow: this.currentWorkflow,
      likes: this.likes,
      shares: this.shares,
      subscribers: this.subscribers,
      totalRevenue: this.totalRevenue,
      views: this.views,
      listOfPlans: this.listOfPlans,
      locations: this.locations
    }
    this.service.updateCard(this.id, this.card)
      .then(_ => {
        let disposable = this.dialogService.addDialog(ConfirmComponent, {
            title:'Card Saved!', 
            message:'Your card was saved succesfully'})
            .subscribe((isConfirmed)=>{
                //We get dialog result
                if(isConfirmed) {
                  this.router.navigate(['/']);
                }
            });
      })
      .catch(err => console.log(err, 'You do not have access!'));
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
