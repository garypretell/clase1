import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardTareaProyeccionContenidoComponent } from './card-tarea-proyeccion-contenido/card-tarea-proyeccion-contenido.component';
import { CardTareaComponent } from './card-tarea/card-tarea.component';
import { OptimizedImageComponent } from './optimized-image/optimized-image.component';
import { TareaComponent } from './tarea.component';

const routes: Routes = [
  {
    path: '',
    component: TareaComponent,
    children: [
      {
        path: 'card-tarea-input',
        component: CardTareaComponent
      },
      {
        path: 'card-tarea-proyeccion-contenido',
        component: CardTareaProyeccionContenidoComponent
      },
      {
        path: 'imagenes-optimizadas',
        component: OptimizedImageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareaRoutingModule { }
