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

  joursDisponibilite: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
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
    },
    {
      nom: 'Jeudi',
      creneaux: [
        { heure: '10h00', isHighlighted: false },
        { heure: '11h00', isHighlighted: false },
        { heure: '12h00', isHighlighted: false },
        { heure: '14h00', isHighlighted: false },
        { heure: '15h00', isHighlighted: false }
      ]
    },
    {
      nom: 'Vendredi',
      creneaux: [
        { heure: '10h00', isHighlighted: false },
        { heure: '11h00', isHighlighted: false },
        { heure: '12h00', isHighlighted: false },
        { heure: '14h00', isHighlighted: false },
        { heure: '15h00', isHighlighted: false }
      ]
    },
    {
      nom: 'Samedi',
      creneaux: [
        { heure: '10h00', isHighlighted: false },
        { heure: '11h00', isHighlighted: false },
        { heure: '12h00', isHighlighted: false },
        { heure: '14h00', isHighlighted: false },
        { heure: '15h00', isHighlighted: false }
      ]
    },
    {
      nom: 'Dimanche',
      creneaux: [
        { heure: '10h00', isHighlighted: false },
        { heure: '11h00', isHighlighted: false },
        { heure: '12h00', isHighlighted: false },
        { heure: '14h00', isHighlighted: false },
        { heure: '15h00', isHighlighted: false }
      ]
    },
  ]
  annonce: Annonce | null = null;
  restaurant: Restaurant | null = null;
  candidat: Candidat = {
    id: 1,
    nom: 'Doe',
    prenom: 'John',
    tel: '+33612345678',
    date_naissance: '1990-01-01',
    cv: null,
    niveau_etude: 'Master',
    experience: '5 ans',
    user_id: 101,
    disponibilite: [],
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
  showDone: boolean = true;

  id: string | null = null;
  constructor(  private http: HttpClient, private route: ActivatedRoute, private router: Router, private dataService: DataService, private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    this.id = localStorage.getItem('userId');
    this.annonce = this.dataService.getAnnonce();       // Récupération de l'annonce
    this.restaurant = this.dataService.getRestaurant(); // Récupération du restaurant
    this.candidat = await this.userService.getUserProfile(Number(this.id));
    console.log("heeeeeeeeeeey")
  }

  toggleDisponibilite(jour: string, isChecked: boolean): void {
    // Initialiser le tableau s'il est undefined
    if (!this.candidat.disponibilite) {
      this.candidat.disponibilite = [];
    }

    if (isChecked) {
      // Ajouter le jour s'il est coché et qu'il n'est pas déjà présent
      if (!this.candidat.disponibilite.includes(jour)) {
        this.candidat.disponibilite.push(jour);
      }
    } else {
      // Supprimer le jour s'il est décoché
      this.candidat.disponibilite = this.candidat.disponibilite.filter(d => d !== jour);
    }
  }

  toggleClass(jour: any, cren: any): void {
    cren.isHighlighted = !cren.isHighlighted; // Basculer l'état de surlignage du créneau

    // Mettez à jour uniquement la disponibilité des créneaux, sans altérer les jours sélectionnés.
    const disponibiliteCreneaux: string[] = [];

    for (const j of this.jours) {
      for (const c of j.creneaux) {
        if (c.isHighlighted) {
          disponibiliteCreneaux.push(`${j.nom} - ${c.heure}`);
        }
      }
    }

    if (this.candidat.disponibilite) {
      this.candidat.disponibilite = [
        ...this.candidat.disponibilite.filter(d => !d.includes(' - ')), // Conservez les jours
        ...disponibiliteCreneaux // Ajoutez les créneaux sélectionnés
      ];
    }

    const selectedCount = jour.creneaux.filter((c: any) => c.isHighlighted).length;

    // Désactiver tous les autres créneaux si 5 sont sélectionnés
    jour.creneaux.forEach((c: any) => {
      c.disabled = selectedCount >= 5 && !c.isHighlighted;
    });


    console.log('Disponibilité mise à jour :', this.candidat.disponibilite);
  }


  updateDisponibilite(): void {
    const disponibiliteCreneaux: string[] = [];

    for (const jour of this.jours) {
      for (const cren of jour.creneaux) {
        if (cren.isHighlighted) {
          disponibiliteCreneaux.push(`${jour.nom} - ${cren.heure}`);
        }
      }
    }

    this.candidat.disponibilite = disponibiliteCreneaux;
    console.log('Disponibilité mise à jour :', this.candidat.disponibilite);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.candidat.cv = file; // Assurez-vous que `cv` est typé comme `File | null`
    }
  }


  envoyerCandidature(): void {
    const formData = new FormData();

    if (this.annonce?.id) {
      formData.append('annonce', this.annonce.id.toString());
    }

    if (this.candidat.id) {
      formData.append('candidat_id', this.candidat.id.toString());
    }

    //if (this.candidat.cv) {
      //formData.append('cv', this.candidat.cv, this.candidat.cv.name);
    //}

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

    if (this.candidat.lettre_motivation) {
      formData.append('message', this.candidat.lettre_motivation);
    }

    //if (this.candidat.disponibilite) {
      //const disponibiliteString = this.candidat.disponibilite.join(',');
      //formData.append('disponibilite', disponibiliteString);
    //}

    const apiUrl = 'https://jobfiksi.ismael-dev.com/api/candidatures/';

    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    this.http.post(apiUrl, formData, { headers }).subscribe({
      next: (response) => {
        console.log('Candidature envoyée avec succès', response);
        this.showDone = !this.showDone;
        this.router.navigate(['/postuler']);
      },
      error: (error) => {
        console.error('Erreur lors de l\'envoi de la candidature', error);

        // Vérifier si le code d'erreur est 400 et si le message correspond
        if (error.status === 400 && error.error?.candidature === 'Vous avez déjà postulé à cette annonce.') {
          // Redirection vers /accueil
          alert('Vous avez déjà postulé à cette annonce.');
          this.router.navigate(['/accueil']);
        } else {
          // Gérer les autres erreurs
          console.error('Autre erreur', error);
        }
      }

    });
  }

}
