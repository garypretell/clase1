import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  dataCargada: any;
  show = true;
  ngOnInit() {
    setTimeout(() => {
      this.dataCargada = 'cargada!';
    }, 3000);
  }

  mostrarOcultarTexto() {
    this.show = !this.show;
  }
}
