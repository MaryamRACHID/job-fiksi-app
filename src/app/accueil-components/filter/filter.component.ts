import {Component, Inject, inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Options} from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent  implements OnInit {

  readonly dialogRef = inject(MatDialogRef<FilterComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { userType: string | null }) {
    console.log('Type d\'utilisateur reçu :', this.data.userType);
  }

  sectionStates: Record<string, boolean> = {
    sortBy: true,
    educationLevel: true,
    location: true,
    availability: true,
    specialization: true,
    age: true,
    salaire: true,
    lastUpdates: true,
    restauTypes: true,
    jobTypes: true,
    jours: true,
    experiences: true,
    workSlots: true
  };

  filters = {
    keyword: '',
    region: '',
    experience: '',
    sector: ''
  };

  sortsBy = ['Par pertinence', 'Le plus récent', 'Le plus proche', 'La date de disponibilité'];
  lastUpdates = ['Récemment', 'Semaine dernière', 'Mois dernier', 'À tout moment'];
  jobTypes = ['Serveur', 'Chef cuisinier', 'Livraison', 'Caissier', 'Plongeur', 'Sous-chef', 'Responsable de banquet', 'Hôte d’accueil', 'Préparateur de commande', 'Pâtissier', 'Serveur événementiel', 'Assistant', 'Commis de cuisine'];
  restauTypes = ['Asiatique', 'Italien', 'Marocain', 'Tout'];
  jours = ['Tous les jours', 'Semaine', 'Week-end', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  educationLevels = ['Master', 'BAC+3', 'BAC+2', 'Licence', 'BAC'];
  locations = ['Paris', 'Marseille', 'Strasbourg', 'Lyon', 'Toulouse', 'Bordeaux', 'Rennes', 'Nantes', 'Nice', 'Montpellier', 'Lille'];
  availabilityOptions = ['Tout de suite', 'Dans les 3 prochains jours', 'Prochaines semaines', 'Prochain mois'];
  specializations = ['Serveur', 'Livreur', 'Nettoyage', 'Chef'];
  experiences = ['Pas d’expérience', 'Moins un année', '1-3 ans', '3-5 ans', '5-10 ans', 'Plus que 10 ans'];
  workSlots = ['La journée', 'La matinée', 'La soirée', '08h00 - 10h00', '10h00 - 12h00', '13h00 - 15h00', '15h00 - 17h00', '18h00 - 20h00', '20h00 - 22h00', '22h00 - 00h00', '00h00 - 06h00'];
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
  salairePreference = {
    min: 200,
    max: 700
  };
  salaireSliderOptions: Options = {
    floor: 50,
    ceil: 1500,
    step: 20,
    translate: (value: number): string => `${value} €`
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

  regions: string[] = ['Paris', 'Lyon', 'Marseille', 'Toulouse'];
  experienceLevels: string[] = ['Débutant', 'Intermédiaire', 'Expert'];
  sectors: string[] = ['Informatique', 'Marketing', 'Restauration', 'Santé'];


  resetFilters() {
    this.filters = {
      keyword: '',
      region: '',
      experience: '',
      sector: ''
    };
  }
}