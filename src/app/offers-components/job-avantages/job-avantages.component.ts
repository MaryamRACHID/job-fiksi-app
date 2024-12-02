import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-job-avantages',
  templateUrl: './job-avantages.component.html',
  styleUrls: ['./job-avantages.component.scss']
})
export class JobAvantagesComponent {
  salary: string = '';  // Salaire proposé
  hours: string = '';  // Nombre d'heures
  advantages: string[] = ['Tickets restaurant', 'Assurance', 'Congés', 'Autres'];  // Liste des avantages
  selectedAdvantages: { [key: string]: boolean } = {};  // Avantages sélectionnés

  apiUrl = 'https://jobfiksi.ismael-dev.com/api/annonces/';  // Remplacez par l'URL de votre API
  token: string | null = 'your_token_here';  // Remplacez par un token valide

  constructor(private router: Router, private http: HttpClient) {}

  // Méthode pour aller à l'étape suivante
  goToNextStep() {
    const formData = new FormData();
    formData.append('salary', this.salary);
    formData.append('hours', this.hours);
    formData.append('advantages', JSON.stringify(this.selectedAdvantages));

    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    this.http.post(this.apiUrl, formData, { headers }).subscribe(
      (response: any) => {
        const annonceId: number = response.id; // Force TypeScript à reconnaître `id`
        console.log(annonceId);
        //this.router.navigate(['/job-page', annonceId]); // Redirection avec l'ID
      },
      error => {
        console.error('Erreur lors de l\'enregistrement des données:', error);
        //alert('Une erreur est survenue lors de l\'enregistrement.');
        this.router.navigate(['/addPost/jobPage']);  // Redirige vers la page suivante
      }
    );
  }

  // Méthode pour aller à l'étape précédente
  goToPreviousStep() {
    this.router.navigate(['/addPost/interviewSlots']);
  }
}
