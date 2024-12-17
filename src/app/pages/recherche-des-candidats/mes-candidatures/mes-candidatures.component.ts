import {Component, Inject} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Annonce, Candidat} from '../../accueil/accueil.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Candidature {
  id: number;
  date_candidature: Date;
  annonce: number;
  candidat: number;
  cv?: string | null;
  message?: string | null;
  codePostal?: string | null;
  crenauxHoraire?: string | null;
  disponibilite?: string | null;
  email?: string | null;
  nom?: string | null;
  pays?: string | null;
  prenom?: string | null;
  tel?: string | null;
  ville?: string | null;
  dateEntretien?: Date | null;
  note?: number | null;
  statut: boolean | null;
}

@Component({
  selector: 'app-mes-candidatures',
  templateUrl: './mes-candidatures.component.html',
  styleUrl: './mes-candidatures.component.scss'
})

export class MesCandidaturesComponent {
  mesCandidatures = [
    {
      id: 1,
      logo:'/assets/OIP.jpg',
      titre: 'Serveur',
      entreprise: 'Burger King',
      adresse:'Lyon, France',
      date: '01/01/2022',
      disponibilites:['Lundi', 'Mardi','Jeudi'],
      prix:'12£',
      etat: 'Candidature en cours'
    },
    {
      id: 2,
      logo:'/assets/MCD.png',
      titre: 'Serveur',
      entreprise: 'McDonald\'s',
      adresse:'Paris, France',
      date: '02/02/2022',
      disponibilites:['Lundi', 'Mardi','Jeudi'],
      prix:'15£',
      etat: 'Candidature refusée'
    },
    {
      id: 3,
      logo:'/assets/MCD.png',
      titre: 'Serveur',
      entreprise: 'MCD',
      adresse:'Rennes, France',
      date: '03/03/2022',
      disponibilites:['Lundi', 'Mardi','Jeudi'],
      prix:'18£',
      etat: 'Candidature acceptée'
    }
  ]

  candidatures: Candidature[] = [];
  annonces: Annonce[] = [];

  token: string = 'votre_token_ici';


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getCandidatures();
    console.log('Candidature:', this.candidatures);
  }


  getCandidatures(): void {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
    const url = 'https://jobfiksi.ismael-dev.com/api/candidatures/';

    this.http.get<{
      annonces: Annonce[];
      candidatures: Candidature[] }>(url, { headers }).subscribe({
      next: (data) => {
        this.candidatures = data.candidatures.map(c => ({
          ...c,
          statut: c.statut ?? false // Valeur par défaut si `statut` est null ou undefined
        }));

        this.annonces = data.annonces;
        console.log('c', this.candidatures);
        console.log('a', this.annonces);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des candidatures :', error);
      }
    });
  }

  getAnnonceTitre(annonceId: number): string {
    console.log(annonceId)
    const annonce = this.annonces.find((a) => a.id === annonceId);
    return annonce ? annonce.titre : 'Annonce inconnue';
  }

  getAnnonceSalaire(annonceId: number): number | null {
    console.log(annonceId);
    const annonce = this.annonces.find((a) => a.id === annonceId);

    if (annonce && annonce.salaire !== undefined) {
      return annonce.salaire;
    }
    return null; // Ou une valeur par défaut comme 0 si nécessaire
  }


  logAnnonceIds(): void {
    if (this.annonces.length === 0) {
      console.log('Aucune annonce disponible.');
    } else {
      console.log('Liste des IDs des annonces :');
      this.annonces.forEach((annonce) => {
        console.log(`Annonce ID : ${annonce.titre}`);
      });
    }
  }


}
