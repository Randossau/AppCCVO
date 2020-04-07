import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AccueilComponent } from './layouts/accueil/accueil.component';
import { ParcoursComponent } from './layouts/parcours/parcours.component';
import { RecommendationsComponent } from './layouts/recommendations/recommendations.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { IncidentsComponent } from './layouts/incidents/incidents.component';
import { GpsComponent } from './layouts/gps/gps.component';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { SettingsComponent } from './layouts/settings/settings.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AccueilComponent,
        ParcoursComponent,
        RecommendationsComponent,
        MenuComponent,
        IncidentsComponent,
        GpsComponent,
        LoginComponent,
        RegisterComponent,
        SettingsComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
