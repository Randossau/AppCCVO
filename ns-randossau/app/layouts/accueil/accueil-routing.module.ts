import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AccueilComponent } from './accueil.component';


const routes: Routes = [
  { path:"", component:AccueilComponent, outlet:"accueil"}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AccueilRoutingModule { }
