import { Options } from '@angular-slider/ngx-slider';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-for-candidat',
  templateUrl: './filter-for-candidat.component.html',
  styleUrl: './filter-for-candidat.component.scss'
})
export class FilterForCandidatComponent implements OnInit{

  readonly dialogRef = inject(MatDialogRef<FilterForCandidatComponent>);

  sectionStates: Record<string, boolean> = {
    typeEmploi:true,
    joursDeTravail:true,
    villes:true,
    sortBy: true,
    educationLevel: true,
    location: true,
    availability: true,
    specialization: true,
    age: true
  };

  // educationLevels = ['Master1/Master2', 'BAC+3', 'BAC+2', 'Licence', 'BAC', '+'];
  typeEmploi = ['Serveur', 'Livreur', 'Nettoyage', 'Chef','caissier','Pâtissier','Boulanger','Pâtisserie','Livraison'];
  jourDeTravail=['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche','Week-end','semaine','Tous les jours'];
  locations = ['Paris', 'Lyon', 'Rennes', 'Nantes'];
  villes=['Paris', 'Lyon', 'aix', 'Marseille', 'Lille', 'Nice', 'Bordeaux', 'Toulouse', 'Limoges', 'Strasbourg','Nantes', 'Toulon', 'Montpellier', 'Grenoble', 'Brest', 'Rouen'];
  availabilityOptions = ['Tout de suite', 'Dans les 3 prochains jours', 'Prochaines semaines', 'Prochain mois'];
  specializations = ['Serveur', 'Livreur', 'Nettoyage', 'Chef'];

  selectedButton: string = '';
  agePreference = {
    min: 18,
    max: 25
  };
  ageSliderOptions: Options = {
    floor: 16,
    ceil: 65,
    step: 1,
    translate: (value: number): string => {
      if (value === 16 || value === 65) {
        return ''; // Cache les valeurs des bornes
      }
      return value + ' ans';
    }
  };
  router: any;

  ngOnInit() {
    console.log("Filter component initialized.");
  }

  toggleSection(section: string) {
    this.sectionStates[section] = !this.sectionStates[section];
  }

  closeFilter() {
    this.dialogRef.close();

  }

  selectButton(button: string) {
    this.selectedButton = button;
  }


  itemsPerPage = 9; // Nombre de villes par page
  currentPage = 1;

  get paginatedVilles(): string[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.villes.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.villes.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
}
