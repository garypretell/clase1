import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  cantidad = 0;
  textoEscrito: string = '';

  incrementar() {
    this.cantidad++;
  }

  onTextboxInput(event: Event) {
    console.log(event);
    this.textoEscrito = (event.target as HTMLInputElement).value;
  }

}
