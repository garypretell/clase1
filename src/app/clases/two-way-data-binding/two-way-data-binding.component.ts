import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {
  texto!: string;

  hacerMayusculas() {
    this.texto = this.texto.toUpperCase();
  }

  hacerMinusculas() {
    this.texto = this.texto.toLowerCase();
  }
}
