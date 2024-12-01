import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {
  @Output() preferencesInfoChange = new EventEmitter<any>();
  @Input() preferencesInfo!: {
    jobPreferences: {
      server: boolean;
      cook: boolean;
      dishwasher: boolean;
      other: boolean;
      otherType: string;
    };
    locationPreference: string;
    accessibleByTransport: boolean;
    kmPreference: {
      max: number;
    };
    salaryPreference: {
      min: number;
      max: number;
    };
  };
  @Input() userType: string | null = null;

  token: string | null = null; // Déclarer le token ici
  filteredCities: string[] = [];
  cities: string[] = ['Paris', 'Lyon', 'Lille']; // Liste des villes pour la recherche

  kmSliderOptions: any = {
    floor: 0,
    ceil: 100,
    step: 1,
    showTicks: false,
    showTicksValues: false,
    translate: (value: number) => `${value} km`,
    showTicksTooltip: false,
    highlightedBarColor: '#eeae00',
  };

  salarySliderOptions: any = {
    floor: 0,
    ceil: 4000,
    step: 50,
    translate: (value: number): string => {
      return value + ' €';
    }
  };

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
    // Récupérer le token depuis le localStorage
    this.token = localStorage.getItem('token'); // Si le token est stocké dans localStorage
  }

  filterCities() {
    const searchTerm = this.preferencesInfo.locationPreference.toLowerCase();
    if (searchTerm) {
      this.filteredCities = this.cities.filter(city =>
        city.toLowerCase().includes(searchTerm)
      );
    } else {
      this.filteredCities = []; // Masquer la liste si aucune saisie
    }
  }

  selectCity(city: string) {
    this.preferencesInfo.locationPreference = city;
    this.filteredCities = []; // Masquer la liste déroulante après sélection
    this.emitPreferencesInfo(); // Émettre les informations des préférences modifiées
  }

  emitPreferencesInfo() {
    this.preferencesInfoChange.emit(this.preferencesInfo);
  }

  savePreference() {
    this.preferencesInfo = { ...this.preferencesInfo };
    this.preferencesInfoChange.emit(this.preferencesInfo);

    console.log(this.preferencesInfo);

    const candidateId = 9;
    const apiUrl = `https://jobfiksi.ismael-dev.com/api/candidats/profile/`;

    const formData = new FormData();

    if (this.preferencesInfo.jobPreferences.server) {
      formData.append('type_de_contrat_recherche', 'true');
    }
    if (this.preferencesInfo.jobPreferences.cook) {
      formData.append('type_de_contrat_recherche', 'true');
    }
    if (this.preferencesInfo.jobPreferences.dishwasher) {
      formData.append('type_de_contrat_recherche', 'true');
    }
    if (this.preferencesInfo.jobPreferences.other && this.preferencesInfo.jobPreferences.otherType) {
      formData.append('type_de_contrat_recherche', this.preferencesInfo.jobPreferences.otherType);
    }

    if (this.preferencesInfo.locationPreference) {
      formData.append('preference_lieu', this.preferencesInfo.locationPreference);
    }

    if (this.preferencesInfo.accessibleByTransport) {
      formData.append('accessibleByTransport', 'true');
    }

    if (this.preferencesInfo.kmPreference.max) {
      formData.append('kmPreference', this.preferencesInfo.kmPreference.max.toString());
    }

    if (this.preferencesInfo.salaryPreference.min) {
      formData.append('salaire_min', this.preferencesInfo.salaryPreference.min.toString());
    }
    if (this.preferencesInfo.salaryPreference.max) {
      formData.append('salaire_max', this.preferencesInfo.salaryPreference.max.toString());
    }

    // Vérifier si le token existe avant de faire l'appel HTTP
    if (this.token) {
      const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

      this.http.put(apiUrl, formData, { headers })
        .subscribe(
          (response) => {
            console.log('Préférences sauvegardées avec succès:', response);
          },
          (error) => {
            console.error('Erreur lors de l\'enregistrement des préférences:', error);
            alert('Une erreur est survenue lors de la sauvegarde de vos préférences.');
          }
        );
    } else {
      console.error('Token non disponible');
      alert('Le token est introuvable. Veuillez vous reconnecter.');
    }
  }
}
