import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { RegisterRoutingModule } from './register-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';


@NgModule({
  declarations: [],
  imports: [
    RegisterRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RegisterModule { }
