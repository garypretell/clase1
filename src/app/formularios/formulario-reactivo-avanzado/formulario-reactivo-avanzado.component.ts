import { Component, inject } from '@angular/core';
import { BaseFormLogin } from 'src/app/utils/forms/base-form-login';
import { BaseFormSignUp } from 'src/app/utils/forms/base-form-sign-up';

@Component({
  selector: 'app-formulario-reactivo-avanzado',
  templateUrl: './formulario-reactivo-avanzado.component.html',
  styleUrls: ['./formulario-reactivo-avanzado.component.css'],
})
export class FormularioReactivoAvanzadoComponent {
  loginForm = inject(BaseFormLogin);
  signUpForm = inject(BaseFormSignUp);

  login() {
    console.log(this.loginForm.baseForm.value);
  }

  signUp() {
    console.log(this.signUpForm.baseForm.value);
  }
}
