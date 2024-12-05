import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<FilterComponent>);

  sectionStates: Record<string, boolean> = {
    sortBy: true,
    educationLevel: true,
    location: true,
    availability: true,
    specialization: true,
    age: true
  };

  educationLevels = ['Master1/Master2', 'BAC+3', 'BAC+2', 'Licence', 'BAC', '+'];
  locations = ['Paris', 'Lyon', 'Rennes', 'Nantes'];
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
  selectedFilterBy: string = '';
  selectedLocations: string[] = [];
  selectedAvailability: string[] = [];
  selectedSpecializations: string[] = [];

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

  applyFilters() {
    console.log('Filtres à appliquer :', {
      filterBy: this.selectedFilterBy,
      educationLevel: this.selectedButton,
      location: this.selectedLocations, // Vérifiez que vous collectez bien les valeurs
      availability: this.selectedAvailability,
      age: this.agePreference,
      specialization: this.selectedSpecializations
    });
  
    this.dialogRef.close({
      filterBy: this.selectedFilterBy,
      educationLevel: this.selectedButton,
      location: this.selectedLocations,
      availability: this.selectedAvailability,
      age: this.agePreference,
      specialization: this.selectedSpecializations
    });
  }
  
  
}
