import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule} from 'nativescript-angular/common';

import { IncidentsRoutingModule } from './incidents-routing.module';
import { IncidentsComponent } from './incidents.component';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    // NativeScriptCommonModule,
    IncidentsComponent,
    DialogComponent,
  ],
  imports: [
    IncidentsRoutingModule,
    NativeScriptCommonModule
  ],

  schemas: [NO_ERRORS_SCHEMA]
})
export class IncidentsModule { }
