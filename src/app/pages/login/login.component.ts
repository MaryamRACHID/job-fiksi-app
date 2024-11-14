import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  currentToggle: string = 'connexion'; // Valeur par défaut

  constructor(private router: Router) {}

  goToProfil() {
    this.router.navigate(['/profil']);
  }

  setToggle(value: string) {
    this.currentToggle = value;
  }

  goToPassword(event: Event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    this.router.navigate(['/password']); // Redirige vers la route /password
  }
}
