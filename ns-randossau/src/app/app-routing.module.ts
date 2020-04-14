import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AccueilComponent } from "./layouts/accueil/accueil.component";
import { ParcoursComponent } from "./layouts/parcours/parcours.component";
import { IncidentsComponent } from "./layouts/incidents/incidents.component";
import { GpsComponent } from "./layouts/gps/gps.component";


const routes: Routes = [
    // { path: "", redirectTo: "/items", pathMatch: "full" }
    { path: "", component:AccueilComponent },
    { path: "parcours", component:ParcoursComponent },
    { path: "incidents", component:IncidentsComponent },
    { path: "gps", component:GpsComponent }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
