import { Component } from '@angular/core';
import { BTNTYPES } from '../shared/dynamic-button/btn-types';

@Component({
  selector: 'app-decorador',
  templateUrl: './decorador.component.html',
  styleUrls: ['./decorador.component.css']
})
export class DecoradorComponent {
  buttonTypePrimary: BTNTYPES = BTNTYPES.primary;
  title = 'Titulo de prueba';
  textoPadreHijo = '';
  textoHijoPadre = '';

  showTextoHijoPadre(e: any) {
    console.log(e);
    this.textoHijoPadre = e;
  }
}
