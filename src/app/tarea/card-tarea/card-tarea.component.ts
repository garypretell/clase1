import { Component, Input } from '@angular/core';
import { Producto } from '../tarea.component';

@Component({
  selector: 'app-card-tarea',
  templateUrl: './card-tarea.component.html',
  styleUrls: ['./card-tarea.component.css']
})
export class CardTareaComponent {
  @Input() product!: Producto;
}
