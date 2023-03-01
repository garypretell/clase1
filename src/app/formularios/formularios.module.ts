import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidationDirective } from '../utils/validations/password-validation.directive';
import { UsernameUnicoDirective } from '../utils/validations/username-unico.directive';
import { FormularioReactivoAvanzadoComponent } from './formulario-reactivo-avanzado/formulario-reactivo-avanzado.component';
import { FormularioReactivoBasicoComponent } from './formulario-reactivo-basico/formulario-reactivo-basico.component';
import { FormularioReactivoIntermedioComponent } from './formulario-reactivo-intermedio/formulario-reactivo-intermedio.component';
import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormulariosComponent } from './formularios.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { MessageErrorComponent } from '../module-standalone/message-error/message-error.component';


@NgModule({
  declarations: [
    FormulariosComponent,
    TemplateFormComponent,
    PasswordValidationDirective,
    UsernameUnicoDirective,
    FormularioReactivoIntermedioComponent,
    FormularioReactivoAvanzadoComponent,
    FormularioReactivoBasicoComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MessageErrorComponent
  ]
})
export default class FormulariosModule { }
