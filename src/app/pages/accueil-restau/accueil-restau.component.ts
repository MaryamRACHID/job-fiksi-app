import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FilterComponent } from '../../offers-components/filter/filter.component';

interface Candidat {
  name: string;
  location: string;
  specialization: string;
  age: number;
  phone: string;
  description: string;
  skills: Array<string>;
  availability: string;
  rating: number;
  photo: string;
  educationLevel: string;
}

@Component({
  selector: 'app-accueil-restaurant',
  templateUrl: './accueil-restau.component.html',
  styleUrls: ['./accueil-restau.component.scss']
})
export class AccueilRestaurantComponent implements OnInit {
  candidats: Candidat[] = [];
  filteredCandidats: Candidat[] = [];
  selectedFilters = {
    filterBy: '', // Chaîne vide par défaut
    educationLevel: '', // Niveau d'étude sélectionné
    location: [] as string[], // Tableau pour les lieux sélectionnés
    availability: [] as string[], // Tableau pour la disponibilité sélectionnée
    age: { min: 16, max: 65 }, // Valeurs par défaut pour les âges
    specialization: [] as string[] // Tableau pour les spécialisations sélectionnées
  };

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    console.log('init : AccueilRestaurantComponent');
    this.candidats = [
      {
        name: 'Julien Dupont',
        location: 'Lyon, France',
        specialization: 'Chef',
        age: 30,
        phone: '+33 5698234124',
        description: 'Serveur expérimenté avec plus de 5 ans dans le service à table.',
        skills: ['Service à table', 'Accueil client', 'Gestion des commandes'],
        availability: 'Tout de suite',
        rating: 4.5,
        photo: 'assets/user-photo.jpg',
        educationLevel: 'Master'
      },
      {
        name: 'John Doe',
        location: 'Paris, France',
        specialization: 'Serveur',
        age: 28,
        phone: '+33 5698234124',
        description: 'Serveur expérimenté avec plus de 5 ans dans le service à table.',
        skills: ['Service à table', 'Accueil client', 'Gestion des commandes'],
        availability: 'Tout de suite',
        rating: 4.5,
        photo: 'assets/user-photo.jpg',
        educationLevel: 'BAC+2'
      },
      {
        name: 'Sabrine Yoan',
        location: 'Nice, France',
        specialization: 'Nettoyage',
        age: 25,
        phone: '+33 5698234124',
        description: 'Serveur expérimenté avec plus de 5 ans dans le service à table.',
        skills: ['Service à table', 'Accueil client', 'Gestion des commandes'],
        availability: 'Prochaines semaines',
        rating: 4.2,
        photo: 'assets/user-photo.jpg',
        educationLevel: 'BAC'
      }
    ];
    // Initialiser la liste filtrée avec tous les candidats
    this.filteredCandidats = [...this.candidats];
  }

  // Ouvre la fenêtre modale de filtre
  toggleFilter(): void {
    const dialogRef = this.dialog.open(FilterComponent, {});
  
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Données reçues depuis FilterComponent :', result);
      if (result) {
        this.selectedFilters = {
          ...this.selectedFilters,
          ...result
        };
        console.log('Filtres combinés :', this.selectedFilters);
        this.applyFilters();
      }
    });
  }
  

  // Applique les filtres à la liste des candidats
  applyFilters(): void {
    console.log('Filtres appliqués :', this.selectedFilters);
  
    this.filteredCandidats = this.candidats.filter((candidat) => {
      return this.filterCandidat(candidat);
    });
  
    console.log('Candidats après filtrage :', this.filteredCandidats);
  }
  
  
  

  // Méthode privée pour filtrer un candidat selon les critères
  private filterCandidat(candidat: Candidat): boolean {
    // Vérifie si le candidat correspond au niveau d'étude sélectionné
    const matchesEducation = this.selectedFilters.educationLevel
      ? candidat.educationLevel === this.selectedFilters.educationLevel
      : true;
  
    // Vérifie si le candidat est dans un des lieux sélectionnés
    const matchesLocation = Array.isArray(this.selectedFilters.location) && this.selectedFilters.location.length > 0
      ? this.selectedFilters.location.includes(candidat.location.split(',')[0]?.trim() || '')
      : true;
  
    // Vérifie si le candidat correspond à la disponibilité sélectionnée
    const matchesAvailability = Array.isArray(this.selectedFilters.availability) && this.selectedFilters.availability.length > 0
      ? this.selectedFilters.availability.includes(candidat.availability)
      : true;
  
    // Vérifie si le candidat est dans la tranche d'âge sélectionnée
    const matchesAge = this.selectedFilters.age.min !== undefined && this.selectedFilters.age.max !== undefined
      ? candidat.age >= this.selectedFilters.age.min &&
        candidat.age <= this.selectedFilters.age.max
      : true;
  
    // Vérifie si la spécialisation du candidat correspond aux filtres
    const matchesSpecialization = Array.isArray(this.selectedFilters.specialization) && this.selectedFilters.specialization.length > 0
      ? this.selectedFilters.specialization.includes(candidat.specialization || '')
      : true;
  
    // Combine tous les critères de filtrage
    const isMatching = matchesEducation && matchesLocation && matchesAvailability && matchesAge && matchesSpecialization;
    console.log(`Candidat retenu (${candidat.name}) :`, isMatching);
    return isMatching;
  }
  
  
  

  // Redirection vers la page d'accueil
  toggleAccueil(): void {
    this.router.navigate(['/accueil']);
  }
}
