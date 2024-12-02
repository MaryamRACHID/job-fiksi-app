import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-base-information',
  templateUrl: './base-information.component.html',
  styleUrls: ['./base-information.component.scss']
})
export class BaseInformationComponent {
  step: number = 1;
  restaurantTypes: string[] = [
    'Italien',
    'Indien',
    'Chinois',
    'Mexicain',
    'Oriental',
    'Autre'
  ];

  jobTypes: string[] = [
    'Partiel',
    'Plein',
    'Autre'
  ];

  statuts: string[] = [
    'Urgent',
    'Non Urgent',
  ];

  contractTypes: string[] = [
    'CDI',
    'CDD',
    'Stage'
  ];

  salaires: string[] = [
    '12.00',
    '20.00',
    '25.00'
  ];

  baseInfo = {
    jobTitle: '',
    description: '',
    jobType: '',
    statut: '',
    contractType: '',
    salary: '',
    //restaurantName: '',
    //location: '',
    //restaurantType: ''
  };

  apiUrl = 'https://jobfiksi.ismael-dev.com/api/annonces/';
  token: string | null = ''; // Remplacez par un token valide



  constructor(private router: Router, private http: HttpClient) {}

  save() {

    const formData = new FormData();
    formData.append('titre', this.baseInfo.jobTitle);
    formData.append('description', this.baseInfo.description);
    formData.append('temps_travail', this.baseInfo.jobType);
    formData.append('statut', this.baseInfo.statut);
    formData.append('type_contrat', this.baseInfo.contractType);
    formData.append('salaire', this.baseInfo.salary);

    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    this.http.post(this.apiUrl, formData, { headers }).subscribe(
      response => {
        console.log('Données enregistrées avec succès :', response);
        this.router.navigate(['/addPost/prerequisites']);
      },
      error => {
        //this.router.navigate(['/addPost/jobInformation']);
        console.error('Erreur lors de l\'enregistrement des données :', error);
        //alert('Une erreur est survenue lors de l\'enregistrement.');
      }
    );
  }
}
