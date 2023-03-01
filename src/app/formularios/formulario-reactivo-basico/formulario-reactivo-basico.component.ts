import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Suscripcion } from 'src/app/utils/enums/suscripcion.enum';
import { passwordValidation } from 'src/app/utils/validations/password-validation.directive';
import { UsernameUnicoService } from 'src/app/utils/validations/username-unico.directive';

@Component({
  selector: 'app-formulario-reactivo-basico',
  templateUrl: './formulario-reactivo-basico.component.html',
  styleUrls: ['./formulario-reactivo-basico.component.css']
})
export class FormularioReactivoBasicoComponent {
  suscripciones: any[] = [];
  constructor(private formBuilder: FormBuilder,
    private usernameUnicoService: UsernameUnicoService) { }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get telefonos(){
    return this.registerForm.get('telefonos') as FormArray;
  }

  registerForm = this.formBuilder.group({
    username: ['', {
      validators: [Validators.required],
      asyncValidators: [this.usernameUnicoService.validate.bind(this.usernameUnicoService)],
      updateOn: 'blur'
    }],
    password: ['', {
      validators: [Validators.required, Validators.minLength(4), passwordValidation()]
    }],
    suscripcion: [Suscripcion.Basica],
    promociones: [true],
    telefonos: this.formBuilder.array([])
  });

  ngOnInit() {
    for (let item in Suscripcion) {
      if (isNaN(Number(item))) {
        this.suscripciones.push({ text: item, value: Suscripcion[item] });
      }
    }
  }

  agregarTelefono(){
    const telefonoFormGroup  = this.formBuilder.group({
      telefono: '',
      descripcion: ''
    });
    this.telefonos.push(telefonoFormGroup);
  }

  removerTelefono(indice: number) {
    this.telefonos.removeAt(indice);
  }

  submit() {

    if (!this.registerForm.valid) {
      alert('Alguna regla de validación no se está cumpliendo');
      return;
    }


    console.log(this.registerForm.value);
  }

  refrescar() {
    this.registerForm.patchValue({
      username: '',
      password: '',
      suscripcion: Suscripcion.Basica,
      promociones: true
    });
    this.telefonos.controls.splice(0, this.telefonos.length);
  }
}