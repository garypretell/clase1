import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioReactivoAvanzadoComponent } from './formulario-reactivo-avanzado/formulario-reactivo-avanzado.component';
import { FormularioReactivoBasicoComponent } from './formulario-reactivo-basico/formulario-reactivo-basico.component';
import { FormularioReactivoIntermedioComponent } from './formulario-reactivo-intermedio/formulario-reactivo-intermedio.component';
import { FormulariosComponent } from './formularios.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {
    path: '',
    component: FormulariosComponent,
    children: [
      {
        path: 'plantilla',
        component: TemplateFormComponent
      },
      {
        path: 'reactivo-basico',
        component: FormularioReactivoBasicoComponent
      },
      {
        path: 'reactivo-intermedio',
        component: FormularioReactivoIntermedioComponent
      },
      {
        path: 'reactivo-avanzado',
        component: FormularioReactivoAvanzadoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariosRoutingModule { }
