import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ChartComponent} from './../chart/chart.component';
import{PnrComponent} from './../pnr/pnr.component';
import{StayComponent} from './../stay/stay.component';
import{HomeComponent} from './../home/home.component';
import{RegisterComponent} from './../register/register.component';
import{LoginComponent} from './../login/login.component';
import{CancelComponent} from './../cancel/cancel.component';
import {AboutComponent } from './../about/about.component';
import {ErrorpageComponent } from './../errorpage/error.component';
const routes: Routes = [
{path:'chart',component:ChartComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'pnr',component:PnrComponent},
{path:'stay',component:StayComponent},
{path:'cancel',component:CancelComponent},
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'',component:HomeComponent},
{path:'**',component:ErrorpageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
