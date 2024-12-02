// src/app/app.component.ts
import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  token: string | null = ''; // Remplacez par un token valide

  ngOnInit(): void {
    // Récupérer le token et userId depuis localStorage
    this.token = localStorage.getItem('token');

    // Vérifiez si le token existe, sinon redirigez l'utilisateur
    if (!this.token) {
      // L'utilisateur n'est pas authentifié, rediriger vers la page de connexion
      this.router.navigate(['/login']);
    } else {
      console.log('Token récupéré :', this.token);
    }
  }

}
