import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtributoComponent } from './binding/atributo/atributo.component';
import { BindingComponent } from './binding/binding.component';
import { EventosComponent } from './binding/eventos/eventos.component';
import { PropiedadComponent } from './binding/propiedad/propiedad.component';
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

const routes: Routes = [
  {
    path: '',
    component: ClasesComponent,
    children: [
      {
        path: 'interpolacion',
        component: InterpolacionComponent
      },
      {
        path: 'binding',  component: BindingComponent,
        children: [
          {
            path: '', redirectTo: 'eventos',  pathMatch: 'full'
          },
          {
            path: 'eventos',
            component: EventosComponent
          },
          {
            path: 'atributos',
            component: AtributoComponent
          },
          {
            path: 'propiedad',
            component: PropiedadComponent
          }
        ]
      },
      {
        path: 'two-way-data-binding',
        component: TwoWayDataBindingComponent
      },
      {
        path: 'directivas',  component: DirectivasComponent,
        children: [
          {
            path: '', redirectTo: 'ng-if',  pathMatch: 'full'
          },
          {
            path: 'ng-if',
            component: NgIfComponent
          },
          {
            path: 'ng-for',
            component: NgForComponent
          },
          {
            path: 'ng-switch',
            component: NgSwitchComponent
          },
          {
            path: 'ng-style',
            component: NgStyleComponent
          },
          {
            path: 'ng-class',
            component: NgClassComponent
          },
        ]
      },
      {
        path: 'test-dynamic-component',
        component: TestDynamicComponentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule { }
