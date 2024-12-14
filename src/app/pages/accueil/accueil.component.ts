import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, forkJoin, map, Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Router} from '@angular/router';

// Interface représentant la structure des candidats
export interface Candidat {
  id: number;
  nom?: string;
  prenom?: string;
  tel?: string;
  date_naissance?: string;
  cv?: string;
  niveau_etude?: string;
  experience?: string;
  user_id: number;
  disponibilite?: string;
  genre?: string;
  image?: string;
  plage_horaire?: string;
  autres_documents?: string;
  code_postal?: string;
  date_debut?: string;
  date_fin?: string;
  etablissement?: string;
  formation?: string;
  iban?: string;
  langues_parlees?: string;
  lettre_motivation?: string;
  notification_mail: boolean;
  num_et_rue?: string;
  pays?: string;
  preference_lieu?: string;
  preference_salaire?: number;
  profil_public: boolean;
  secu_sociale?: string;
  type_de_contrat_recherche?: string;
  type_de_poste_recherche?: string;
  ville?: string;
  salaire_max?: number;
  salaire_min?: number;
  email_pro?: string;
  specilaite?: string; // Remarque : possible faute de frappe dans la base de données
}

export interface Restaurant {
  id: number;
  nom: string;
  tel?: string;
  user_id: number;
  code_postal?: string;
  image?: string;
  notification_mail: boolean;
  num_et_rue?: string;
  pays?: string;
  site_web?: string;
  ville?: string;
  email_pro?: string;
  type_de_restaurant?: string;
}

export interface Annonce {
  id: number;
  titre: string;
  description?: string;
  date_publication?: Date;
  type_contrat: string;
  salaire?: number;
  temps_travail: string;
  statut: string;
  created_by_id?: number;
  latitude?: number;
  longitude?: number;
  avantages?: string;
  mode_paiement?: string;
  nb_heures_semaine?: number;
  type_annonce?: string;
  code_postal?: string;
  created_at?: Date;
  experience?: string;
  horaire_travail?: string;
  jours_de_travail?: string;
  pays?: string;
  type_de_travail?: string;
  updated_at?: Date;
  ville?: string;
}

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  candidats: Candidat[] = [];
  restaurants: Restaurant[] = [];
  restaurant: Restaurant | null = null;  // Permet de gérer null ou Restaurant
  annonces: Annonce[] = [];
  annoncesAvecRestaurant: { annonce: Annonce; restaurant: Restaurant | null }[] = [];
  token: string = 'votre_token_ici';
  userType: string | null = null;
  restaurantSubject = new BehaviorSubject<Restaurant | null>(null);
  list: boolean | null = null;

  constructor(private http: HttpClient, private router: Router) {}


  ngOnInit(): void {
    this.getCandidats();
    this.getAnnonces();
    this.userType = localStorage.getItem("userType");
  }

  getCandidats(): void {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
    const url = 'https://jobfiksi.ismael-dev.com/api/candidats/';

    this.http.get<Candidat[]>(url, { headers }).subscribe({
      next: (data) => {
        this.candidats = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des candidats :', error);
      }
    });
  }

  getRestaurants(): void {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
    const url = 'https://jobfiksi.ismael-dev.com/api/restaurants/';

    this.http.get<Restaurant[]>(url, { headers }).subscribe({
      next: (data) => {
        console.log('Données des restaurants récupérées :', data);
        this.restaurants = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des restaurants :', error);
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


  getAnnonces(): void {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
    const url = 'https://jobfiksi.ismael-dev.com/api/annonces/';

    this.http.get<Annonce[]>(url, { headers }).subscribe({
      next: (data) => {
        this.annonces = data;
        this.annonces.map(annonce => {
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

  async onVoirToutClick() {
    this.list = true;
  }


}
