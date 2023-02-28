import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtributoComponent } from './clases/binding/atributo/atributo.component';
import { BindingComponent } from './clases/binding/binding.component';
import { EventosComponent } from './clases/binding/eventos/eventos.component';
import { PropiedadComponent } from './clases/binding/propiedad/propiedad.component';
import { NgClassComponent } from './clases/directivas/atributos/ng-class/ng-class.component';
import { NgStyleComponent } from './clases/directivas/atributos/ng-style/ng-style.component';
import { DirectivasComponent } from './clases/directivas/directivas.component';
import { NgForComponent } from './clases/directivas/estructurales/ng-for/ng-for.component';
import { NgIfComponent } from './clases/directivas/estructurales/ng-if/ng-if.component';

import { NgSwitchComponent } from './clases/directivas/estructurales/ng-switch/ng-switch.component';
import { InterpolacionComponent } from './clases/interpolacion/interpolacion.component';
import { TestDynamicComponentComponent } from './clases/test-dynamic-component/test-dynamic-component.component';
import { TwoWayDataBindingComponent } from './clases/two-way-data-binding/two-way-data-binding.component';

const routes: Routes = [
  // {
  //   path: '', redirectTo: 'interpolacion',  pathMatch: 'full'
  // },
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
    path: 'decorador',
    loadChildren: () => import('./decorador/decorador.module')
  },
  {
    path: 'formularios',
    loadChildren: () => import('./formularios/formularios.module')
  },
  {
    path: 'test-dynamic-component',
    component: TestDynamicComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
