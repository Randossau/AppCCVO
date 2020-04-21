import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ParcoursRoutingModule } from './parcours-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ParcoursComponent } from './parcours.component';
import { NativeScriptFormsModule } from 'nativescript-angular';


@NgModule({
  declarations: [
    ParcoursComponent
  ],
  imports: [
    ParcoursRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ParcoursModule { }
