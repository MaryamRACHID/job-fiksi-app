import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

selectButton(level: string) {
  this.selectedButton = level; 
  console.log('Niveau d\'étude sélectionné :', this.selectedButton);
}
  readonly dialogRef = inject(MatDialogRef<FilterComponent>);

  sectionStates: Record<string, boolean> = {
    sortBy: true,
    educationLevel: true,
    location: true,
    availability: true,
    specialization: true,
    age: true
  };

  educationLevels = ['Master', 'BAC+3', 'BAC+2', 'Licence', 'BAC'];
  locations = ['Paris', 'Lyon', 'Nice', 'Nantes'];
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
    translate: (value: number): string => `${value} ans`
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

  applyFilters() {
    const filters = {
      filterBy: this.selectedFilterBy,
      educationLevel: this.selectedButton,
      location: this.selectedLocations,
      availability: this.selectedAvailability,
      age: this.agePreference,
      specialization: this.selectedSpecializations
    };
    
    this.dialogRef.close(filters);
    console.log(filters);
  }
}
