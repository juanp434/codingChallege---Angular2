import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class CampaignsService {
  campaign: Observable<any>;
  cards: FirebaseListObservable<any[]>;
  card: FirebaseObjectObservable<any>;
  campaigns: FirebaseListObservable<any[]>;
  filters: FirebaseListObservable<any[]>;

  constructor(
    private http: Http,
    private db: AngularFireDatabase
  ) {
    this.campaigns = db.list('/campaigns');
    this.cards = db.list('/cards');
    this.filters = db.list('/filters/state');
  }

  getCampaigns(){
    // return this.http.get('/assets/campaigns.json').map(
    //   (res) => res.json()
    // );

    return this.campaigns;
  }

  getCards(){
    // return this.http.get('/assets/cards.json').map(
    //   (res) => res.json()
    // );

    return this.cards;
  }

  getFilters(){
    // return this.http.get('/assets/filters.json').map(
    //   (res) => res.json()
    // );

    return this.filters;
  }

  getPendingCampaigns(): Observable<any[]>{
    return this.cards
        .map((res) => res.filter(card => card.currentWorkflow == "pending")
    );
  }

  getCampaign(id): Observable<any>{
    return this.cards
        .map((res) => res.filter(card => card.campaignId == id)
    );
  }

  getCard(id){
    // return this.cards
    // .map((res) => res.filter(card => card.$key == id)
    // );
    this.card = this.db.object('/cards/'+id);
    return this.card;
  }

  updateCard(id, card){
    this.card = this.db.object('/cards/'+id);
    return this.card.update(card);
  }

  addCard(card){
    return this.card.set(card);
  }


}
