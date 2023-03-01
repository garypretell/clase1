import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AtributoComponent } from './binding/atributo/atributo.component';
import { BindingComponent } from './binding/binding.component';
import { EventosComponent } from './binding/eventos/eventos.component';
import { PropiedadComponent } from './binding/propiedad/propiedad.component';
import { ClasesRoutingModule } from './clases-routing.module';
import { ClasesComponent } from './clases.component';
import { NgClassComponent } from './directivas/atributos/ng-class/ng-class.component';
import { NgStyleComponent } from './directivas/atributos/ng-style/ng-style.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { NgForComponent } from './directivas/estructurales/ng-for/ng-for.component';
import { NgIfComponent } from './directivas/estructurales/ng-if/ng-if.component';
import { NgSwitchComponent } from './directivas/estructurales/ng-switch/ng-switch.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { TestDynamicComponentComponent } from './test-dynamic-component/test-dynamic-component.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';


@NgModule({
  declarations: [
    ClasesComponent,
    InterpolacionComponent,
    BindingComponent,
    EventosComponent,
    PropiedadComponent,
    AtributoComponent,
    TwoWayDataBindingComponent,
    DirectivasComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgStyleComponent,
    NgClassComponent,
    TestDynamicComponentComponent
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export default class ClasesModule { }
