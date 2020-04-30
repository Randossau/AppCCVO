import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { GpsComponent } from './gps/gps.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RecommandationsComponent } from './recommandations/recommandations.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRootComponent } from './settings/settings-root.component';
import { AnimationsService } from './parcours/circuits/animations-service';
import { ParcoursServService } from './parcours/circuits/parcoursServ-service';
import { DetailsRoutingModule } from './parcours/details/details-routing.module';
import { DetailsComponent } from './parcours/details/details.component';



@NgModule({
  declarations: [
    LayoutsComponent,
    GpsComponent,
    IncidentsComponent,
    ParcoursComponent,
    AccueilComponent,
    RecommandationsComponent,
    SettingsComponent,
    SettingsRootComponent,
    DetailsComponent,
  ],

  entryComponents: [
    SettingsRootComponent
],

  imports: [
    NativeScriptUISideDrawerModule,
    NativeScriptUIListViewModule,
    NativeScriptUICalendarModule,
    NativeScriptUIChartModule,
    NativeScriptUIDataFormModule,
    NativeScriptUIAutoCompleteTextViewModule,
    NativeScriptUIGaugeModule,NativeScriptCommonModule,
    LayoutsRoutingModule,
    DetailsRoutingModule,
    NativeScriptFormsModule
  ],

  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
      AnimationsService,
      ParcoursServService
  ]

})
export class LayoutsModule { }
