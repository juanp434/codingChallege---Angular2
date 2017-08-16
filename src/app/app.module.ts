import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PendingComponent } from './pending/pending.component';

import { CampaignsService } from './campaigns.service';
import { CampaignComponent } from './campaign/campaign.component';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pending', component: PendingComponent},
  {path: 'campaign/:id', component: CampaignComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PendingComponent,
    CampaignComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CampaignsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
