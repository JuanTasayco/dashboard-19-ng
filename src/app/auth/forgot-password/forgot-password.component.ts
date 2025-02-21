import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  formBuilder = inject(FormBuilder)
  router = inject(Router);
  forgotForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]]
  })

  validateErrorForm(controlName: string) {
    return this.forgotForm.get(controlName)?.invalid && this.forgotForm.get(controlName)?.touched;
  }

  getErrors(controlName: string): string {
    const controlErrors = this.forgotForm.get(controlName)?.errors;
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

  sendToEmail() {
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
    } else {
      console.log('Ingresando Correctamente');
      Swal.fire({
        title: "Correo enviado",
        icon: "success",
        draggable: true
      });
    }
  }

  redirecToLogin() {
    this.router.navigate(["auth/login"]);
  }
}
