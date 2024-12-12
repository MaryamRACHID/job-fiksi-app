import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FilterComponent } from '../../offers-components/filter/filter.component';

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

  isFilterVisible = false;

  constructor(private dialog: MatDialog, private router: Router) {}

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
    console.log("coucou");
    const dialogRef = this.dialog.open(FilterComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Filtres reçus depuis la boîte de dialogue :', result); // Log pour débogage
      if (result) {
        this.selectedFilters = {
          ...this.selectedFilters,
          ...result
        };
        console.log('Filtres combinés appliqués :', this.selectedFilters); // Log après fusion des filtres
        this.applyFilters();
      }
    });
  }


  applyFilters(): void {
    console.log('Filtres appliqués avant filtrage :', this.selectedFilters);
    this.filteredCandidats = this.candidats.filter((candidat) => {
      return this.filterCandidat(candidat);
    });
    // Appliquez le tri par "Les plus récents" si sélectionné
    if (this.selectedFilters.filterBy.includes('Les plus récents')) {
      this.filteredCandidats.sort((a, b) =>
        new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime()
      );
    }

    console.log('Candidats après filtrage :', this.filteredCandidats);

  }


  private filterCandidat(candidat: Candidat): boolean {
    const { educationLevel, location, availability, age, specialization } = this.selectedFilters;
    console.log(educationLevel);

    // Filtre par niveau d'éducation
    const matchesEducation = Array.isArray(educationLevel) && educationLevel.length > 0
    ? educationLevel.some((level) =>
      level.toLowerCase() === candidat.educationLevel.toLowerCase()
    )
    : true;


    // Filtre par localisation (exactement la ville, insensible à la casse)
    const matchesLocation = location.length > 0
      ? location.some((loc) =>
          loc.toLowerCase().trim() === candidat.location.split(',')[0].toLowerCase().trim()
        )
      : true;

    // Filtre par disponibilité
    const matchesAvailability = availability.length > 0
      ? availability.some((avail) =>
          avail.toLowerCase().trim() === candidat.availability.toLowerCase().trim()
        )
      : true;

    // Filtre par tranche d'âge
    const matchesAge = age.min !== undefined && age.max !== undefined
      ? candidat.age >= age.min && candidat.age <= age.max
      : true;

    // Filtre par spécialisation
    const matchesSpecialization = specialization.length > 0
      ? specialization.some((spec) =>
          spec.toLowerCase().trim() === candidat.specialization.toLowerCase().trim()
        )
      : true;

    // Affiche les résultats de chaque critère pour débogage
    console.log(`Candidat: ${candidat.name}`, {
      matchesEducation,
      matchesLocation,
      matchesAvailability,
      matchesAge,
      matchesSpecialization
    });

    // Retourne true uniquement si tous les critères définis sont satisfaits
    return (
      matchesEducation &&
      matchesLocation &&
      matchesAvailability &&
      matchesAge &&
      matchesSpecialization
    );
  }



  // toggleAccueil(): void {
  //   this.router.navigate(['/rechercheCandidat']);

  // }

  toggleAccueil(): void {
    // Rediriger vers /accueil
    this.router.navigate(['/accueil']);
  }
}
