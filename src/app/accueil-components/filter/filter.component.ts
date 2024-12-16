import {Component, EventEmitter, Inject, inject, OnInit, Output} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Options } from '@angular-slider/ngx-slider';
import {Annonce, Candidat, Restaurant} from '../../pages/accueil/accueil.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<FilterComponent>);
  @Output() filteredCandidats = new EventEmitter<Candidat[]>();
  @Output() filteredAnnonces = new EventEmitter<Annonce[]>();
  annoncesAvecRestaurant: { annonce: Annonce; restaurant: Restaurant | null }[] = [];

  token: string = 'votre_token_ici';

  candidatsToFilter: Candidat[] = [];
  annoncesToFilter: Annonce[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { userType: string | null, candidatsToFilter: Candidat[] , annoncesToFilter: Annonce[] }, private http: HttpClient) {
    console.log('Candidats reçus :', this.candidatsToFilter);
    console.log('Annonces reçus :', this.annoncesToFilter);
  }

  ngOnInit() {
    this.getCandidats();
    this.getAnnonces();
    console.log('Filter component initialized with candidats:', this.candidatsToFilter);
  }

  getCandidats(): void {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
    const url = 'https://jobfiksi.ismael-dev.com/api/candidats/';

    this.http.get<Candidat[]>(url, { headers }).subscribe({
      next: (data) => {
        this.candidatsToFilter = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des candidats :', error);
      }
    });
  }

  getAnnonces(): void {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
    const url = 'https://jobfiksi.ismael-dev.com/api/annonces/';

    this.http.get<Annonce[]>(url, { headers }).subscribe({
      next: (data) => {
        this.annoncesToFilter = data;
        this.annoncesToFilter.map(annonce => {
          //return this.getRestaurantById(1);
          //this.getRestaurantById(annonce.id).subscribe({
          this.getRestaurantById(2).subscribe({
            next: (restaurant) => {
              this.annoncesAvecRestaurant.push({ annonce, restaurant });
            },
            error: (error) => {
              console.error('Erreur:', error);
            }
          })
        });
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des annonces :', error);
      }
    });
  }

  getRestaurantById(id: number): Observable<Restaurant | null> {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
    const url = 'https://jobfiksi.ismael-dev.com/api/restaurants/';

    return this.http.get<Restaurant[]>(url, { headers }).pipe(
      map((restaurants) => {
        // Trouver le restaurant par ID
        const restaurant = restaurants.find(r => r.id === id) || null;
        if (restaurant) {
          restaurant.image = restaurant.image || 'assets/images/1.PNG'; // Valeur par défaut pour l'image
        }
        return restaurant; // Retourne le restaurant trouvé ou null
      }),
      catchError((error) => {
        console.error('Erreur lors de la récupération des restaurants :', error);
        return of(null); // Retourne null en cas d'erreur
      })
    );
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
    console.log(this.selectedLocations);
  }

  applyFilters() {
    let filteredCandidats = this.candidatsToFilter;
    let filteredAnnonces = this.annoncesToFilter;

    // Filter by location
    if (this.selectedLocations.length > 0) {
      filteredCandidats = filteredCandidats.filter(candidat =>
        this.selectedLocations.includes(<string>candidat.ville)
      );
    }

    // Filter by education level
    if (this.selectedButton.length > 0) {
      filteredCandidats = filteredCandidats.filter(candidat =>
        this.selectedButton.includes(<string>candidat.niveau_etude)
      );
    }

    // Filter by specialization
    if (this.selectedSpecializations.length > 0) {
      filteredCandidats = filteredCandidats.filter(candidat =>
        this.selectedSpecializations.includes(<string>candidat.specilaite)
      );
    }

    if (this.selectedSpecializations.length > 0) {
      filteredAnnonces = filteredAnnonces.filter(annonce =>
        this.selectedSpecializations.includes(<string>annonce.type_de_travail)
      );
    }

    this.filteredCandidats.emit(filteredCandidats);
    this.filteredAnnonces.emit(filteredAnnonces);
    this.dialogRef.close();
  }


  toggleSection(section: string) {
    this.sectionStates[section] = !this.sectionStates[section];
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


}
