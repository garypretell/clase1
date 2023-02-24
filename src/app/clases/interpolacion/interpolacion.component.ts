import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {
  nombre: string = 'CLASE 03';
  direccion: string = 'CLASE 03';
  persona: any = {
    nombre: 'GARY',
    apellido: 'PRETELL'
  }

  duplicarTexto(valor: string): string {
    // return valor + ' ' + valor;
    return `${valor} ${valor} sdfsfsfs`
  }
}
