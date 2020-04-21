import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SettingsRoutingModule } from './settings-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SettingsComponent } from './settings.component';
import { NativeScriptFormsModule } from 'nativescript-angular';


@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    SettingsRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SettingsModule { }
