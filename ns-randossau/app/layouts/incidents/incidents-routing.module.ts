import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { IncidentsComponent } from './incidents.component';


const routes: Routes = [
  {path:"incidents", component:IncidentsComponent, outlet:"incidents"}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class IncidentsRoutingModule { }

