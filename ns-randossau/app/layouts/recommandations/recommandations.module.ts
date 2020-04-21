import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { RecommandationsRoutingModule } from './recommandations-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { RecommandationsComponent } from './recommandations.component';
import { NativeScriptFormsModule } from 'nativescript-angular';


@NgModule({
  declarations: [
    RecommandationsComponent
  ],
  imports: [
    RecommandationsRoutingModule,
    NativeScriptFormsModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RecommandationsModule { }
