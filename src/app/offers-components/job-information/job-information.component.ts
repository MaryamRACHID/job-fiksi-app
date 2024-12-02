import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-job-information',
  templateUrl: './job-information.component.html',
  styleUrls: ['./job-information.component.scss']
})
export class JobInformationComponent {

  jobTypes: string[] = [
    'Type1',
    'Type2',
    'Autre'
  ];

  jobInfo = {
    jobType: '',
    description: '',
    autres: ''
  };

  apiUrl = 'https://jobfiksi.ismael-dev.com/api/annonces/'; // Remplacez par l'API appropriée
  token: string | null = 'your_token_here'; // Remplacez par un token valide

  constructor(private router: Router, private http: HttpClient) {}

  goToNextStep() {
    const formData = new FormData();
    formData.append('type_job', this.jobInfo.jobType);
    formData.append('description', this.jobInfo.description);
    formData.append('autres', this.jobInfo.autres);

    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    this.http.post(this.apiUrl, formData, { headers }).subscribe(
      response => {
        console.log('Données enregistrées avec succès :', response);
        //this.router.navigate(['/addPost/prerequisites']);
      },
      error => {
        console.error('Erreur lors de l\'enregistrement des données :', error);
        this.router.navigate(['/addPost/prerequisites']);
        //alert('Une erreur est survenue lors de l\'enregistrement.');
      }
    );
  }

  goToPreviousStep() {
    this.router.navigate(['/addPost/base']);
  }
}
