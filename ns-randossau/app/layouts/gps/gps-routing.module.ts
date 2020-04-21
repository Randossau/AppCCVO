import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { GpsComponent } from './gps.component';


const routes: Routes = [
  { path:"gps", component:GpsComponent, outlet:"gps"}

];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class GpsRoutingModule { }
