import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FilterComponent } from '../../offers-components/filter/filter.component';
import { FiltreCandidatService } from '../../services/filtreCandidat.service';

interface Candidat {
  dateCreation : string;
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
    filterBy: '',
    educationLevel: '',
    location: [] as string[],
    availability: [] as string[],
    age: { min: 16, max: 65 },
    specialization: [] as string[]
  };
  

  constructor(private dialog: MatDialog, private router: Router, private filtreCandidatService: FiltreCandidatService) {}

  ngOnInit(): void {
    this.candidats = [
      {
        dateCreation: '2024/05/24',
        name: 'John Doe',
        location: 'Paris, France',
        specialization: 'Serveur',
        age: 20,
        phone: '+33 5698234124',
        description: 'Serveur expérimenté avec plus de 5 ans dans le service à table.',
        skills: ['Service à table', 'Accueil client', 'Gestion des commandes'],
        availability: 'Tout de suite',
        rating: 4.5,
        photo: 'assets/user-photo.jpg',
        educationLevel: 'BAC+2'
      },
      {
        dateCreation: '2024/12/03',
        name: 'Sabrine Yoan',
        location: 'Nantes, France',
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
    this.filteredCandidats = [...this.candidats];
  }

  toggleFilter(): void {
    const dialogRef = this.dialog.open(FilterComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.selectedFilters = {
          ...this.selectedFilters,
          ...result
        };
        this.applyFilters();
      }
    });
  }
  
    async applyFilters(): Promise<void> {
      try {
        // Appel au service pour récupérer les candidats filtrés
        const candidats = await this.filtreCandidatService.getCandidatsByFiltre(this.selectedFilters);
        
        // Mise à jour de l'objet filteredCandidats avec les données récupérées
        this.filteredCandidats = candidats.map((candidat: any) => ({
          dateCreation: candidat.dateCreation,
          name: candidat.name,
          location: candidat.location,
          specialization: candidat.specialization,
          age: candidat.age,
          phone: candidat.phone,
          description: candidat.description,
          skills: candidat.skills || [], // Défaut : tableau vide si aucune compétence
          availability: candidat.availability,
          rating: candidat.rating,
          photo: candidat.photo,
          educationLevel: candidat.educationLevel,
        }));
        
        console.log('Liste des candidats filtrés :', this.filteredCandidats);
      } catch (error) {
        console.error('Erreur lors de l\'application des filtres :', error);
      }
    }
  
  toggleAccueil(): void {
    this.router.navigate(['/accueil']);
  }
}
