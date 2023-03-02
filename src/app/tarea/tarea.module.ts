import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { TareaRoutingModule } from './tarea-routing.module';
import { TareaComponent } from './tarea.component';
import { CardTareaComponent } from './card-tarea/card-tarea.component';
import { OptimizedImageComponent } from './optimized-image/optimized-image.component';
import { CardTareaProyeccionContenidoComponent } from './card-tarea-proyeccion-contenido/card-tarea-proyeccion-contenido.component';
import { CardProyeccionContenidoComponent } from '../module-standalone/card-proyeccion-contenido/card-proyeccion-contenido.component';
import { DynamicCardComponent } from '../module-standalone/dynamic-card/dynamic-card.component';


@NgModule({
  declarations: [
    TareaComponent,
    CardTareaComponent,
    OptimizedImageComponent,
    CardTareaProyeccionContenidoComponent
  ],
  imports: [
    CommonModule,
    TareaRoutingModule,
    NgOptimizedImage,
    CardProyeccionContenidoComponent,
    DynamicCardComponent
  ]
})
export default class TareaModule { }
