import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) {}
  goToHome() {
    this.router.navigate(['/home']);
  }

  switchToRegister(event: Event) {
    event.preventDefault();
    const group = document.querySelector('mat-button-toggle-group');
    if (group) {
      group.setAttribute('value', 'inscription');
    }
  }
}
