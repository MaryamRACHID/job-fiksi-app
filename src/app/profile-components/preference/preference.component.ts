import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import {HttpClient} from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  selectCity(city: string) {
    // Sélectionner une ville et la mettre dans l'input
    this.locationPreference = city;
    this.filteredCities = [];  // Masquer la liste déroulante après sélection
  }

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

  savePreference() {
    this.preferencesInfoChange.emit(this.userType);
    const apiUrl = 'https://endpoint.com/savePreferences';

    const preferencesPayload = {
      jobPreferences: this.jobPreferences,
      locationPreference: this.locationPreference,
      kmPreference: this.kmPreference.max,
      salaryPreferenceMin: this.salaryPreference.min,
      salaryPreferenceMax: this.salaryPreference.max
    };

    this.http.post(apiUrl, preferencesPayload)
      .subscribe(
        response => {
          console.log('Preferences saved successfully:', response);
        },
        error => {
          console.error('Error saving preferences:', error);
        }
      );
  }
}
