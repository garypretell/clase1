import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Suscripcion } from 'src/app/utils/enums/suscripcion.enum';
import { Registro } from 'src/app/utils/interfaces/registro';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  model: Registro = { username: '', password: '', suscripcion: Suscripcion.Gratuita, promociones: true };
  constructor() { }
  suscripciones: any[] = [];

  @ViewChild('registerForm') registerForm!: NgForm;

  ngOnInit() {
    for (let item in Suscripcion) {
      if (isNaN(Number(item))) {
        this.suscripciones.push({ text: item, value: Suscripcion[item] });
      }
    }
  }

  submit() {
    console.log(this.model);
  }

  refrescar() {
    this.model = { username: '', password: '', suscripcion: Suscripcion.Gratuita, promociones: true };
    console.log(this.registerForm);
    this.registerForm.resetForm();
  }

}
