import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-decorador-output',
  templateUrl: './decorador-output.component.html',
  styleUrls: ['./decorador-output.component.css']
})
export class DecoradorOutputComponent {
  @Output() textoHijoPadre = new EventEmitter();
  textoEmitido = '';
}
