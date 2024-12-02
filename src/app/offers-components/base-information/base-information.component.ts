import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormDataService} from '../../services/form-data.service';

@Component({
  selector: 'app-base-information',
  templateUrl: './base-information.component.html',
  styleUrls: ['./base-information.component.scss']
})
export class BaseInformationComponent {
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
  };

  constructor(private router: Router, private formDataService: FormDataService) {}

  ngOnInit() {
    // Charger les données déjà saisies (si elles existent)
    this.baseInfo = this.formDataService.getFormData('baseInfo');
  }

  nextStep() {
    // Stocker les données dans le service
    this.formDataService.setFormData('baseInfo', this.baseInfo);

    // Naviguer vers la prochaine étape
    this.router.navigate(['/addPost/prerequisites']);
  }
}
