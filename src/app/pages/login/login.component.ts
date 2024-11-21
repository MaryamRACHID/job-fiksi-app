import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  currentToggle: string = 'inscription'; // Valeur par défaut

  constructor(private router: Router) {}

  goToProfil() {
    this.router.navigate(['/profil']);
  }

  setToggle(value: string) {
    this.currentToggle = value;
  }
}
