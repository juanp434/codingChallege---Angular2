import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import { environment } from '../environments/environment';

import { Ng2PaginationModule } from 'ng2-pagination';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PendingComponent } from './pending/pending.component';
import { CampaignComponent } from './campaign/campaign.component';

import { CampaignsService } from './campaigns.service';
import { FilterPipe } from './filter.pipe';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardAddComponent } from './card-add/card-add.component';
import { ConfirmComponent } from './confirm/confirm.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pending', component: PendingComponent},
  {path: 'campaign/:id', component: CampaignComponent},
  {path: 'card/edit/:id', component: CardEditComponent},
  {path: 'card/add', component: CardAddComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PendingComponent,
    CampaignComponent,
    FilterPipe,
    CardEditComponent,
    CardAddComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Ng2PaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BootstrapModalModule.forRoot({container:document.body})
  ],
  entryComponents: [
    ConfirmComponent
  ],
  providers: [CampaignsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
