import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { matchValidator } from '../validators/frm-validators';

@Injectable({ providedIn: 'root' })
export class BaseFormSignUp {
  constructor(private fb: FormBuilder) {}

  baseForm = this.fb.group({
    displayName: ['', [Validators.required, Validators.minLength(4)]],
    dni: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, matchValidator('confirmPassword', true)],
    ],
    confirmPassword: ['', [Validators.required, matchValidator('password')]],
    check: ['', [Validators.requiredTrue]],
  });
}
