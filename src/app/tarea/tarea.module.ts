import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { TareaRoutingModule } from './tarea-routing.module';
import { TareaComponent } from './tarea.component';
import { CardTareaComponent } from './card-tarea/card-tarea.component';
import { OptimizedImageComponent } from './optimized-image/optimized-image.component';


@NgModule({
  declarations: [
    TareaComponent,
    CardTareaComponent,
    OptimizedImageComponent
  ],
  imports: [
    CommonModule,
    TareaRoutingModule,
    NgOptimizedImage
  ]
})
export default class TareaModule { }
