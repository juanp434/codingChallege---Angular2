import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CampaignsService {
  campaign: Observable<any>;
  constructor(
    private http: Http
  ) { }

  getCampaigns(){
    return this.http.get('/assets/campaigns.json').map(
      (res) => res.json()
    );
  }

  getCards(){
    return this.http.get('/assets/cards.json').map(
      (res) => res.json()
    );
  }

  getFilters(){
    return this.http.get('/assets/filters.json').map(
      (res) => res.json()
    );
  }

  getPendingCampaigns(): Observable<any>{
    return this.http.get('/assets/cards.json')
        .map((res) => res.json()
        .filter(<campaign>(x) => x.currentWorkflow == 'pending')
    );
  }

  getCampaign(id): Observable<any>{
    return this.http.get('/assets/cards.json')
        .map((res) => res.json()
        .filter(<campaign>(x) => x.campaignId == id)
    );
  }

}
