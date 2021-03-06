import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ParcoursComponent } from './parcours.component';
import { GpsComponent } from '../gps/gps.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path:"parcours", component:ParcoursComponent, outlet:"parcours"},
  {path:"detail/:id", component:DetailsComponent, outlet:"detail-id"},
  {path:"gps/:id", component:GpsComponent, outlet:"gps"}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ParcoursRoutingModule { }
