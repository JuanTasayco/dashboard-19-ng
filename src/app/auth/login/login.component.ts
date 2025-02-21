import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  loginForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
    remember: [false, []],
  })


  validateErrorForm(controlName: string) {
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched;
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      console.log('Ingresando Correctamente');
    }
  }

  getErrors(controlName: string): string {
    const controlErrors = this.loginForm.get(controlName)?.errors;
    if (!controlErrors) return "";

    const errorKeys: string = Object.keys(controlErrors)[0];
    console.log(errorKeys)
    const errors: any = {
      required: "Este campo es oligatorio",
      minlenght: "El dato es muy pequeño",
      email: "El formato de email no es correcto",
    }

    return errors[errorKeys];
  }

  redirecToForgotPassword() {
    this.router.navigate(["auth/forgot-password"]);
  }
}
