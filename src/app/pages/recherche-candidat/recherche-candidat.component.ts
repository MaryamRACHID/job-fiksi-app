import { Component } from '@angular/core';
import { HeaderRechercheComponent } from '../../offers-components/header-recherche/header-recherche.component';
@Component({
  selector: 'app-user-view',
  templateUrl: './recherche-candidat.component.html',
  styleUrls: ['./recherche-candidat.component.scss']
})
export class RestaurateurComponent {
  // Définir le type d'utilisateur (restaurateur par défaut)
  userType: 'restaurateur' | 'candidat' = 'restaurateur';

  // Données statiques pour les restaurateurs
  restaurateurResults = [
    {
      name: 'John Doe',
      location: 'Lyon, France',
      phone: '+33 5698234124',
      description:
        'Because I always find fake job calls so I’m confused which job to take can you share your knowledge here? thank you',
      skills: ['Service à la clientèle', 'Service à la clientèle'],
      rating: 4.5,
      photo: 'assets/user-photo.jpg'
    }
  ];

  // Données statiques pour les candidats
  candidatResults = [
    {
      name: 'Jane Smith',
      location: 'Paris, France',
      phone: '+33 674892134',
      description:
        'Looking for a part-time job opportunity in customer service. Passionate and hardworking.',
      skills: ['Communication', 'Problem Solving'],
      rating: 4.8,
      photo: 'assets/user-photo.jpg'
    }
  ];

  // Getter pour récupérer les résultats en fonction du type d'utilisateur
  get results() {
    return this.userType === 'restaurateur'
      ? this.restaurateurResults
      : this.candidatResults;
  }
}
