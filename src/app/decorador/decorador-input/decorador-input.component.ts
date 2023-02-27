import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decorador-input',
  templateUrl: './decorador-input.component.html',
  styleUrls: ['./decorador-input.component.css']
})
export class DecoradorInputComponent {
  @Input() textoPadreHijo = '';
}
