import { Component } from '@angular/core';

@Component({
  selector: 'app-clase33',
  templateUrl: './clase33.component.html',
  styleUrls: ['./clase33.component.css']
})
export class Clase33Component {
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
