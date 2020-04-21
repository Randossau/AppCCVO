import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/layouts/default/(accueil:accueil//gps:gps//incidents:incidents//parcours:parcours//recommandations:recommandations)", pathMatch: "full" },
    { path: "layouts", loadChildren: () => import("./layouts/layouts.module").then(m => m.LayoutsModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
