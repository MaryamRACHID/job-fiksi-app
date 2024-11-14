import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  constructor(private router: Router) {}

  // Méthode pour naviguer vers différentes pages
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  navigateToAccueil() {
   
    this.router.navigate(['/accueilRestau']); // Route par défaut pour les candidats
  }

  navigateToProfil() {
   
    this.router.navigate(['/profil']); 
  }

}
