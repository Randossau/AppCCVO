import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { RecommandationsComponent } from './recommandations.component';


const routes: Routes = [
  {path:"recommandations", component:RecommandationsComponent, outlet:"recommandations"}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class RecommandationsRoutingModule { }
