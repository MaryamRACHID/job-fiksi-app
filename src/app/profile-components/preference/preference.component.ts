import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent {
  @Output() preferencesInfoChange = new EventEmitter<any>();

  @Input() userType: string | null = null;

  jobPreferences = {
    server: false,
    cook: false,
    dishwasher: false,
    other: false,
    otherType: ''
  };

  locationPreference: string = '';

  salaryPreference = {
    min: 1000,
    max: 2000
  };

  salarySliderOptions: Options = {
    floor: 0,
    ceil: 4000,
    step: 50,
    translate: (value: number): string => {
      return value + ' €';
    }
  };

  onPreferenceUpdate() {
    this.preferencesInfoChange.emit(this.userType);
  }
  kmPreference = { max: 0 }; // Valeur maximale par défaut

  kmSliderOptions = {
    floor: 0,  // Valeur minimale fixée à 0
    ceil: 100, // Valeur maximale
    step: 1,   // Incrément du slider
    showTicks: false, // Afficher des repères de valeur
    showTicksValues: false, // Afficher les valeurs des ticks
    translate: (value: number) => `${value} km`, // Ajouter "km" après la valeur
    showTicksTooltip: false, // Désactive les tooltips
    highlightedBarColor: '#eeae00',
  };


  cities: string[] = ['Paris', 'Lyon', 'Lille']; // Liste des villes
  filteredCities: string[] = this.cities;  // Villes filtrées selon la saisie

  filterCities() {
    const searchTerm = this.locationPreference.toLowerCase();
    if (searchTerm) {  // Vérifiez que la saisie n'est pas vide
      this.filteredCities = this.cities.filter(city =>
        city.toLowerCase().includes(searchTerm)
      );
    } else {
      this.filteredCities = [];  // Masque la liste si aucune saisie
    }
  }


  selectCity(city: string) {
    // Sélectionner une ville et la mettre dans l'input
    this.locationPreference = city;
    this.filteredCities = [];  // Masquer la liste déroulante après sélection
  }
}
