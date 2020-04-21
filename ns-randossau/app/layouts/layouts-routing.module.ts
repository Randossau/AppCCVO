import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LayoutsComponent } from "./layouts.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { GpsComponent } from "./gps/gps.component";
import { IncidentsComponent } from "./incidents/incidents.component";
import { ParcoursComponent } from "./parcours/parcours.component";
import { RecommandationsComponent } from "./recommandations/recommandations.component";


const routes: Routes = [
    {
        
    //     path: "default", component: LayoutsComponent, children: [
    //         { path: "layouts", redirectTo: "accueil", pathMatch: "full"},
    //         { path: "accueil", loadChildren: () => import("~/layouts/accueil/accueil.module").then(m => m.AccueilModule) },
    //         { path: "gps", loadChildren: () => import("~/layouts/gps/gps.module").then(m => m.GpsModule) },
    //         { path: "incidents", loadChildren: () => import("~/layouts/incidents/incidents.module").then(m => m.IncidentsModule) },
    //         { path: "login", loadChildren: () => import("~/layouts/login/login.module").then(m => m.LoginModule) },
    //         { path: "parcours", loadChildren: () => import("~/layouts/parcours/parcours.module").then(m => m.ParcoursModule) },
    //         { path: "recommandations", loadChildren: () => import("~/layouts/recommandations/recommandations.module").then(m => m.RecommandationsModule) },
    //         { path: "register", loadChildren: () => import("~/layouts/register/register.module").then(m => m.RegisterModule) },
    //         { path: "settings", loadChildren: () => import("~/layouts/settings/settings.module").then(m => m.SettingsModule) },
    //     ]
    // }
    
        
        path: "default", component: LayoutsComponent, children: [
            { path: "accueil", component:AccueilComponent, outlet:"accueil"},
            { path: "gps", component:GpsComponent, outlet:"gps"},
            { path: "incidents", component:IncidentsComponent, outlet:"incidents" },
            { path: "parcours", component:ParcoursComponent, outlet:"parcours" },
            { path: "recommandations", component:RecommandationsComponent, outlet:"recommandations"},
        ]
    }
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class LayoutsRoutingModule { }