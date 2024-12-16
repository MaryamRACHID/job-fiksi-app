import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormDataService} from '../../services/form-data.service';

@Component({
  selector: 'app-job-avantages',
  templateUrl: './job-avantages.component.html',
  styleUrls: ['./job-avantages.component.scss']
})
export class JobAvantagesComponent {
  paiement: string = '';  // Salaire proposé
  hours: string = '';  // Nombre d'heures
  // advantages: string[] = ['Tickets restaurant', 'Assurance', 'Congés', 'Autres']; // Liste des avantages
  selectedAdvantages: { [key: string]: boolean } = {};  // Avantages sélectionnés

  constructor(private router: Router, private formDataService: FormDataService) {}

  // onCustomAdvantageChange(event: Event): void {
  //   const inputElement = event.target as HTMLInputElement; // Typecasting
  //   const value = inputElement?.value.trim(); // Vérification de nullité et suppression des espaces

  //   if (value && !this.advantages.includes(value)) {
  //     this.advantages.push(value); // Ajoute l'avantage si ce n'est pas déjà dans le tableau
  //     console.log(this.advantages);
  //   }
  // }

  // advantages = ['Horaires flexibles', 'Repas gratuits', 'Équipe agréable', 'Ajouter autres'];
  // // selectedAdvantages: { [key: string]: boolean } = {};
  // isOtherSelected = false;
  // newAdvantage = '';

  // onAdvantageChange(advantage: string) {
  //   if (advantage === 'Ajouter autres') {
  //     this.isOtherSelected = this.selectedAdvantages['Ajouter autres'] || false;
  //   }
  // }

  // addAdvantage() {
  //   if (this.newAdvantage.trim()) {
  //     const trimmedAdvantage = this.newAdvantage.trim();
  //     const otherIndex = this.advantages.indexOf('Ajouter autres');

  //     if (otherIndex !== -1) {
  //       // Insérer avant "Autres"
  //       this.advantages.splice(otherIndex, 0, trimmedAdvantage);
  //     } else {
  //       // Si "Autres" n'existe pas, ajouter à la fin
  //       this.advantages.push(trimmedAdvantage);
  //     }

  //     this.selectedAdvantages[trimmedAdvantage] = true;
  //     this.newAdvantage = '';
  //     this.isOtherSelected = false; // Fermer le champ après ajout
  //     console.log(this.advantages);
  //   }
  // }
  advantages = ['Horaires flexibles', 'Repas gratuits', 'Équipe agréable', 'Ajouter autres'];
  // selectedAdvantages: { [key: string]: boolean } = {};
  isOtherSelected = false;
  newAdvantage = '';

  // Méthode pour gérer le clic sur "Ajouter autres"
  onAdvantageChange() {
    this.isOtherSelected = !this.isOtherSelected;  // Toggle l'affichage de l'input
    this.newAdvantage = '';  // Réinitialise la valeur saisie
  }

  addAdvantage() {
    if (this.newAdvantage.trim()) {
      const trimmedAdvantage = this.newAdvantage.trim();
      const otherIndex = this.advantages.indexOf('Ajouter autres');

      if (otherIndex !== -1) {
        // Insérer avant "Ajouter autres"
        this.advantages.splice(otherIndex, 0, trimmedAdvantage);
      } else {
        // Si "Ajouter autres" n'existe pas, ajouter à la fin
        this.advantages.push(trimmedAdvantage);
      }

      // Ajouter la sélection
      this.selectedAdvantages[trimmedAdvantage] = true;
      this.newAdvantage = '';
      this.isOtherSelected = false; // Fermer le champ après ajout
    }
  }
  ngOnInit() {
    // Charger les données précédemment saisies, si elles existent
    const savedData = this.formDataService.getFormData('jobAdvantages');
    if (savedData) {
      this.paiement = savedData.paiement || '';
      this.hours = savedData.hours || '';
      this.selectedAdvantages = savedData.selectedAdvantages || {};
    }
  }

  // Aller à l'étape suivante
  goToNextStep() {
    // Enregistrer les données dans le service
    this.formDataService.setFormData('jobAdvantages', {
      paiement: this.paiement,
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
