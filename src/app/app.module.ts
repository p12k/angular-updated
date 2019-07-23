import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './../login/login.component';
import {RegisterComponent } from './../register/register.component';
import{railComponent} from './../railway/railway.component';
import{ChartComponent} from './../chart/chart.component';
import{PnrComponent} from './../pnr/pnr.component';
import{StayComponent} from './../stay/stay.component';
import{CancelComponent} from './../cancel/cancel.component';
import{HomeComponent} from './../home/home.component';
import { AboutFilterPipe } from './../about/about-filter.pipe';
import { AboutComponent } from './../about/about.component';
import { ErrorpageComponent } from './../errorpage/error.component';
@NgModule({
  declarations: [
    AppComponent,railComponent,ChartComponent,PnrComponent,StayComponent,CancelComponent,HomeComponent,AboutFilterPipe,AboutComponent, LoginComponent,RegisterComponent,ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule ,  RouterModule.forRoot([
      { path: 'about-link', component: AboutComponent }
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
