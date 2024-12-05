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
    filterBy: '',
    educationLevel: '',
    location: [] as string[],
    availability: [] as string[],
    age: { min: 16, max: 65 },
    specialization: [] as string[]
  };

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.candidats = [

      {
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
    console.log("coucou je suis filtre ");
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

  applyFilters(): void {
    this.filteredCandidats = this.candidats.filter((candidat) => {
      return this.filterCandidat(candidat);
    });
  }

  private filterCandidat(candidat: Candidat): boolean {
    const matchesEducation = this.selectedFilters.educationLevel
      ? candidat.educationLevel === this.selectedFilters.educationLevel
      : true;

    const matchesLocation = this.selectedFilters.location.length > 0
      ? this.selectedFilters.location.some((loc) =>
          candidat.location.includes(loc)
        )
      : true;

    const matchesAvailability = this.selectedFilters.availability.length > 0
      ? this.selectedFilters.availability.includes(candidat.availability)
      : true;

    const matchesAge =
      candidat.age >= this.selectedFilters.age.min &&
      candidat.age <= this.selectedFilters.age.max;

    const matchesSpecialization = this.selectedFilters.specialization.length > 0
      ? this.selectedFilters.specialization.includes(candidat.specialization)
      : true;
      
    console.log("coucou je suis dans filtre");

    return (
      matchesEducation &&
      matchesLocation &&
      matchesAvailability &&
      matchesAge &&
      matchesSpecialization
    );
  }

  toggleAccueil(): void {
    this.router.navigate(['/accueil']);
  }
}
