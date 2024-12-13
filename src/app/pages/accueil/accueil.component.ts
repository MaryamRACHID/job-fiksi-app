import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  candidats: Candidat[] = [];
  restaurants: Restaurant[] = [];
  token: string = 'votre_token_ici';
  userType: string | null = null;


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCandidats();
    this.getRestaurants()
    this.userType = localStorage.getItem("userType")
  }

  getCandidats(): void {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
    const url = 'https://jobfiksi.ismael-dev.com/api/candidats/';

    this.http.get<Candidat[]>(url, { headers }).subscribe({
      next: (data) => {
        console.log('Données des candidats récupérées :', data);
        this.candidats = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des candidats :', error);
      }
    });
  }

  getRestaurants(): void {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
    const url = 'https://jobfiksi.ismael-dev.com/api/restaurants/profile/';

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

}
