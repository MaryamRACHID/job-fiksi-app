import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../../services/form-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.scss']
})
export class JobPageComponent implements OnInit {
  // Données du restaurant
  restaurantName: string = '';
  logo: string = '';
  location: string = '';
  niveau='bac+5';
  avtg=['av1', 'av2', 'av3'];
  // Données saisies dans les autres étapes
  jobTitle: string = '';
  jobDescription: string = '';
  jobType: string = '';
  salary: string = '';
  lieu: string = '';
  // ageMin:string ='';
  niveauEtude:string = '';
  attenteCandidat:string = '';
  plageHoraire:string[] = [];
  avantages : string[] = [];
  paiement : string = '';
  hours: string = '';
  selectedDays: string[] = [];
  competences: string = '';


  // API URL et token pour récupérer les données du restaurant
  apiUrl = 'https://jobfiksi.ismael-dev.com/api/restaurants/profile/';
  postApiUrl = 'https://jobfiksi.ismael-dev.com/api/annonces/';  // URL de l'API pour publier l'annonce
  token: string | null = 'your_token_here';  // Remplacez par un token valide

  constructor(private router: Router, private formDataService: FormDataService, private http: HttpClient) {}

  ngOnInit(): void {
    // Récupérer les informations du restaurant
    this.getRestaurantProfile();

    // Récupérer les données précédemment saisies
    const baseInfo = this.formDataService.getFormData('baseInfo');
    const prerequisitesInfo = this.formDataService.getFormData('prerequisitesInfo');
    const jobAdvantages = this.formDataService.getFormData('jobAdvantages');

    if (baseInfo) {
      this.jobTitle = baseInfo.jobTitle || '';
      this.jobDescription = baseInfo.description || '';
      this.jobType = baseInfo.jobType || '';
      this.salary = baseInfo.salary || '';
      console.log(this.jobType, this.salary, this.lieu, this.jobTitle, this.jobDescription);
    }

    if (prerequisitesInfo) {
      this.niveauEtude = prerequisitesInfo.education || '';
      this.competences = prerequisitesInfo.competences || '';
      this.selectedDays = Object.keys(prerequisitesInfo.availabilityInfo).filter(day => prerequisitesInfo.availabilityInfo[day]);
      this.plageHoraire = Object.keys(prerequisitesInfo.timeSlots).filter(time => prerequisitesInfo.timeSlots[time]);
      console.log(this.plageHoraire,this.selectedDays,this.competences,this.niveauEtude);
    }

    if (jobAdvantages) {
      this.hours = jobAdvantages.hours || '';
      this.paiement = jobAdvantages.paiement || '';
      this.avantages = Object.keys(jobAdvantages.selectedAdvantages).filter(advg => jobAdvantages.selectedAdvantages[advg]);
      console.log(this.avantages, this.hours, this.paiement)
    }
  }

  // Méthode pour récupérer les données du restaurant
  getRestaurantProfile() {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    this.http.get(this.apiUrl, { headers }).subscribe(
      (response: any) => {
        this.restaurantName = response.nom;
        this.logo = response.image;
        this.location = `${response.num_et_rue}, ${response.code_postal} ${response.ville}, ${response.pays}`;
        console.log('Restaurant:', this.restaurantName, 'Location:', this.location);
      },
      error => {
        console.error('Erreur lors de la récupération des informations du restaurant:', error);
      }
    );
  }

  // Méthode pour publier l'annonce
  goToNextStep() {
    // Préparer les données à envoyer à l'API de publication de l'annonce
    const annonceData = {
      titre: this.jobTitle,
      description: this.jobDescription,
      temps_travail: this.jobType,
      statut: 'Urgent', // Remplacer par le statut que vous avez
      type_contrat: 'CDI', // Remplacer par le type de contrat que vous avez
      salaire: this.salary
    };

    // Configuration de l'en-tête pour l'authentification (si nécessaire)
    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    // Envoi des données via POST
    this.http.post(this.postApiUrl, annonceData, { headers }).subscribe(
      (response) => {
        // Si l'API répond positivement, naviguer vers la page de succès
        console.log('Annonce publiée avec succès', response);
        this.router.navigate(['/addPost/succeed']);
      },
      (error) => {
        // Si l'API rencontre une erreur, afficher l'erreur
        console.error('Erreur lors de la publication de l\'annonce:', error);
      }
    );
  }

  // Retour à l'étape précédente
  goToPreviousStep() {
    this.router.navigate(['/addPost/jobAvantages']);
  }
}
