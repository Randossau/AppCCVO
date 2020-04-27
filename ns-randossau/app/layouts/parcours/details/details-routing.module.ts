import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DetailsComponent } from "./details.component";

const routes: Routes = [
  {path:"details", component:DetailsComponent, outlet:"details"}

];

@NgModule({
	imports: [NativeScriptRouterModule.forChild(routes)],
	exports: [NativeScriptRouterModule]
})
export class DetailsRoutingModule { }
