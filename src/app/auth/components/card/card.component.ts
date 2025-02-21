import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  constructor(private router: Router) { }

  redirecToForgotPassword() {
    this.router.navigate(["auth/forgot-password"]);
  }
}
