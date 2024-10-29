import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isRegistering: boolean = false; // Toggle between login and registration modes
  email: string = ''; // Email for login
  registerEmail: string = ''; // Email for registration

  constructor(private router: Router) {}

  // Toggles between login and registration forms
  toggleForm() {
    this.isRegistering = !this.isRegistering;
  }

  // Navigates to the profile page after login
  goToProfile() {
    if (this.email) {
      this.router.navigate(['/profile']);
    }
  }

  // Prefills the email in the login form when switching from register mode
  prefillEmail() {
    this.email = this.registerEmail;
    this.isRegistering = false;
  }

  // Submits the form depending on the current mode (login or registration)
  onSubmit() {
    if (this.isRegistering) {
      console.log('Registering with email:', this.registerEmail);
      this.prefillEmail();
    } else {
      this.goToProfile();
    }
  }
}
