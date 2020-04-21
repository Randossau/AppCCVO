import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { IncidentsRoutingModule } from './incidents-routing.module';
import { IncidentsComponent } from './incidents.component';



@NgModule({
  declarations: [
    IncidentsComponent
  ],
  imports: [
    IncidentsRoutingModule,
    IncidentsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class IncidentsModule { }
