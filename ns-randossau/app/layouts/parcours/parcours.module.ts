import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ParcoursRoutingModule } from './parcours-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular';

import { ParcoursComponent } from './parcours.component';
import { DetailsRoutingModule } from './details/details-routing.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    ParcoursComponent,
    DetailsComponent
  ],
  imports: [
    ParcoursRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    DetailsRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ParcoursModule { }
