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

  sortsBy = ['Les plus récents', 'Les plus pertinents'];
  educationLevels = ['Master', 'BAC+3', 'BAC+2', 'Licence', 'BAC'];
  locations = ['Paris', 'Lyon', 'Nice', 'Nantes'];
  availabilityOptions = ['Tout de suite', 'Dans les 3 prochains jours', 'Prochaines semaines', 'Prochain mois'];
  specializations = ['Serveur', 'Livreur', 'Nettoyage', 'Chef'];

selectedButton: string[] = [];

toggleButton(educationLevel: string) {
  const index = this.selectedButton.indexOf(educationLevel);

  if (index === -1) {
    // Ajouter si non sélectionné
    this.selectedButton.push(educationLevel);
  } else {
    // Retirer si déjà sélectionné
    this.selectedButton.splice(index, 1);
  }
  console.log(this.selectedButton); // Debug pour vérifier l'état
}


  toggleLocation(location: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedLocations.push(location);
    } else {
      const index = this.selectedLocations.indexOf(location);
      if (index !== -1) {
        this.selectedLocations.splice(index, 1);
      }
    }
    console.log( this.selectedLocations);
  }

  toggleAvailability(availability: string, event: Event){
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedAvailability.push(availability);
    } else {
      const index = this.selectedAvailability.indexOf(availability);
      if (index !== -1) {
        this.selectedAvailability.splice(index, 1);
      }
    }
    console.log( this.selectedAvailability);
  }

  toggleSpecialization(specialization: string, event: Event){
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedSpecializations.push(specialization);
    } else {
      const index = this.selectedSpecializations.indexOf(specialization);
      if (index !== -1) {
        this.selectedSpecializations.splice(index, 1);
      }
    }
    console.log( this.selectedSpecializations);
  }

  toggleSortBy(sortBy: string, event: Event){
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedFilterBy.push(sortBy);
    } else {
      const index = this.selectedFilterBy.indexOf(sortBy);
      if (index !== -1) {
        this.selectedFilterBy.splice(index, 1);
      }
    }
    
    console.log( this.selectedFilterBy)
  }

  
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

  selectedFilterBy: string[] = [];
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
    console.log("applyFilters");
    const filters = {
      filterBy: this.selectedFilterBy,
      educationLevel: this.selectedButton,
      location: this.selectedLocations,
      availability: this.selectedAvailability,
      age: this.agePreference,
      specialization: this.selectedSpecializations
    };
    console.log("filters : ", this.selectedButton);

    this.dialogRef.close(filters);
    console.log(filters);
  }
}
