import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../../services/data.service';
import {UserService} from '../../../services/user.service';
import {Annonce, Candidat, Restaurant} from '../../accueil/accueil.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrl: './postuler.component.scss'
})
export class PostulerComponent {

  token: string | null = null;

  jours = [
    {
      nom: 'Lundi',
      creneaux: [
        { heure: '10h00', isHighlighted: false },
        { heure: '11h00', isHighlighted: false },
        { heure: '12h00', isHighlighted: false },
        { heure: '14h00', isHighlighted: false },
        { heure: '15h00', isHighlighted: false }
      ]
    },
    {
      nom: 'Mardi',
      creneaux: [
        { heure: '10h00', isHighlighted: false },
        { heure: '11h00', isHighlighted: false },
        { heure: '12h00', isHighlighted: false },
        { heure: '14h00', isHighlighted: false },
        { heure: '15h00', isHighlighted: false }
      ]
    },
    {
      nom: 'Mercredi',
      creneaux: [
        { heure: '10h00', isHighlighted: false },
        { heure: '11h00', isHighlighted: false },
        { heure: '12h00', isHighlighted: false },
        { heure: '14h00', isHighlighted: false },
        { heure: '15h00', isHighlighted: false }
      ]
    }
  ]
  annonce: Annonce | null = null;
  restaurant: Restaurant | null = null;
  candidat: Candidat = {
    id: 1,
    nom: 'Doe',
    prenom: 'John',
    tel: '+33612345678',
    date_naissance: '1990-01-01',
    cv: 'cv_john_doe.pdf',
    niveau_etude: 'Master',
    experience: '5 ans',
    user_id: 101,
    disponibilite: 'Lundi, Mardi',
    genre: 'Masculin',
    image: 'photo_john_doe.jpg',
    plage_horaire: '9h-18h',
    autres_documents: 'certificat_travail.pdf',
    code_postal: '69001',
    date_debut: '2024-01-01',
    date_fin: '2024-12-31',
    etablissement: 'Université Lumière Lyon 2',
    formation: 'Informatique',
    iban: 'FR7630006000011234567890189',
    langues_parlees: 'Français, Anglais',
    lettre_motivation: 'Je suis passionné par le développement logiciel et les technologies modernes.',
    notification_mail: true,
    num_et_rue: '10 Rue de la Paix',
    pays: 'France',
    preference_lieu: 'Lyon',
    preference_salaire: 35000,
    profil_public: true,
    secu_sociale: '1234567890123',
    type_de_contrat_recherche: 'CDI',
    type_de_poste_recherche: 'Développeur Full Stack',
    ville: 'Lyon',
    salaire_max: 40000,
    salaire_min: 30000,
    email_pro: 'john.doe@example.com',
    specilaite: 'Développement web'
  };

  id: string | null = null;
  constructor(  private http: HttpClient, private route: ActivatedRoute, private router: Router, private dataService: DataService, private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    this.id = localStorage.getItem('userId');
    this.annonce = this.dataService.getAnnonce();       // Récupération de l'annonce
    this.restaurant = this.dataService.getRestaurant(); // Récupération du restaurant
    this.candidat = await this.userService.getUserProfile(Number(this.id));
    console.log("heeeeeeeeeeey")
  }

    toggleClass(jour: any, cren: any) {
      cren.isHighlighted = !cren.isHighlighted; // Inverse l'état pour le créneau cliqué du jour spécifique
    }

  showDone: boolean = true; // Par défaut, Div 1 est visible


  envoyerCandidature(): void {
    const formData = new FormData();

    if (this.candidat.cv) {
      formData.append('cv', this.candidat.cv);
    }

    if (this.candidat.nom) {
      formData.append('nom', this.candidat.nom);
    }
    if (this.candidat.prenom) {
      formData.append('prenom', this.candidat.prenom);
    }
    if (this.candidat.tel) {
      formData.append('tel', this.candidat.tel);
    }
    if (this.candidat.email_pro) {
      formData.append('email', this.candidat.email_pro);
    }
    if (this.candidat.disponibilite) {
      formData.append('disponibilite', this.candidat.disponibilite);
    }
    if (this.candidat.lettre_motivation) {
      formData.append('lettre_motivation', this.candidat.lettre_motivation);
    }

    const apiUrl = 'https://jobfiksi.ismael-dev.com/api/candidate/';

    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    this.http.put(apiUrl, formData, { headers }).subscribe({
      next: (response) => {
        console.log('Candidature envoyée avec succès', response);
        this.showDone = !this.showDone;
        this.router.navigate(['/rechercheDesCandidats']);
      },
      error: (error) => {
        console.error('Erreur lors de l\'envoi de la candidature', error);
      }
    });
  }



  toggleDisponibilite(jour: string, isChecked: boolean): void {
    if (!this.candidat.disponibilite) {
      this.candidat.disponibilite = '';
    }

    const disponibilites = this.candidat.disponibilite.split(', ').filter(Boolean);

    if (isChecked) {
      // Ajouter le jour s'il est coché
      disponibilites.push(jour);
    } else {
      // Supprimer le jour s'il est décoché
      const index = disponibilites.indexOf(jour);
      if (index > -1) {
        disponibilites.splice(index, 1);
      }
    }

    // Mettre à jour les disponibilités sous forme de chaîne
    this.candidat.disponibilite = disponibilites.join(', ');
  }

  joursDisponibilite: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];


}
