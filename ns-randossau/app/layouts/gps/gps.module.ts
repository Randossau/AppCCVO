import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { GpsRoutingModule } from './gps-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular';
import { GpsComponent } from './gps.component';
import { GpsMenuComponent } from './gps-menu/gps-menu.component';


@NgModule({
  declarations: [
    GpsComponent,
    GpsMenuComponent
  ],
  imports: [
    GpsRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GpsModule { }
