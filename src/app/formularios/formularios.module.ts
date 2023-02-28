import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormulariosComponent } from './formularios.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidationDirective } from '../utils/validations/password-validation.directive';
import { UsernameUnicoDirective } from '../utils/validations/username-unico.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FormulariosComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    PasswordValidationDirective,
    UsernameUnicoDirective
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export default class FormulariosModule { }
