import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { GpsMenuRoutingModule } from './gps-menu-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';


@NgModule({
  declarations: [],
  imports: [
    GpsMenuRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GpsMenuModule { }
