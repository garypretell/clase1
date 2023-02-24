import { Component } from '@angular/core';

@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.component.html',
  styleUrls: ['./propiedad.component.css']
})
export class PropiedadComponent {
  imagenURL!: string;

  ngOnInit(): void {
    this.imagenURL = (<HTMLInputElement>document.getElementById('selectImagen')).value;
  }
}
