import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Producto } from 'src/app/tarea/tarea.component';

@Component({
  selector: 'app-dynamic-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.css']
})
export class DynamicCardComponent {
  @Input() product!: Producto;
}
