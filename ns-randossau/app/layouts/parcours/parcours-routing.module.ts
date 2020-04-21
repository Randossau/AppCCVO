import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ParcoursComponent } from './parcours.component';


const routes: Routes = [
  {path:"parcours", component:ParcoursComponent, outlet:"parcours"}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ParcoursRoutingModule { }