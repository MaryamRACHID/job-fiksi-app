import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormDataService} from '../../services/form-data.service';

@Component({
  selector: 'app-job-avantages',
  templateUrl: './job-avantages.component.html',
  styleUrls: ['./job-avantages.component.scss']
})
export class JobAvantagesComponent {
  salary: string = '';  // Salaire proposé
  hours: string = '';  // Nombre d'heures
  advantages: string[] = ['Tickets restaurant', 'Assurance', 'Congés', 'Autres']; // Liste des avantages
  selectedAdvantages: { [key: string]: boolean } = {};  // Avantages sélectionnés

  constructor(private router: Router, private formDataService: FormDataService) {}

  ngOnInit() {
    // Charger les données précédemment saisies, si elles existent
    const savedData = this.formDataService.getFormData('jobAdvantages');
    if (savedData) {
      this.salary = savedData.salary || '';
      this.hours = savedData.hours || '';
      this.selectedAdvantages = savedData.selectedAdvantages || {};
    }
  }

  // Aller à l'étape suivante
  goToNextStep() {
    // Enregistrer les données dans le service
    this.formDataService.setFormData('jobAdvantages', {
      salary: this.salary,
      hours: this.hours,
      selectedAdvantages: this.selectedAdvantages
    });

    // Naviguer vers l'étape suivante
    this.router.navigate(['/addPost/jobPage']);
  }

  // Aller à l'étape précédente
  goToPreviousStep() {
    this.router.navigate(['/addPost/interviewSlots']);
  }
}
