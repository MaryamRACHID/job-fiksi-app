import { Component, Output, Input, EventEmitter } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent {
  // Propriété pour stocker les informations personnelles
  @Input()  personalInfo!: { nom: string, prenom: string, date_naissance: string | null, genre: string };
  // Événement pour émettre les informations mises à jour
  @Output() personalInfoChange = new EventEmitter<any>();
  // Événement pour passer à l'étape suivante
  @Output() next = new EventEmitter<void>();
  userId: any;

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
  }

  updateInfo() {
    this.personalInfoChange.emit(this.personalInfo);
    this.savePersonalInfo();
  }
 // Méthode pour formater la date
 formatDate(date: string): string {
  const formattedDate = new Date(date);
  return formattedDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
}
// Méthode pour enregistrer les informations personnelles
async savePersonalInfo() {
  if (!this.personalInfo.nom) {
    this.personalInfo.nom = '';
  }
  if (!this.personalInfo.genre) {
    this.personalInfo.genre = '';
  }
  if (this.personalInfo.date_naissance) {
    this.personalInfo.date_naissance = this.formatDate(this.personalInfo.date_naissance);
  } else {
    this.personalInfo.date_naissance = null;
  }

  try {
    const response = await axios.put(`https://jobfiksi.ismael-dev.com/api/users/${this.userId}/`, this.personalInfo, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`
      }
    });
    console.log('Profil mis à jour avec succès:', response.data);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil:', error);
  }
}


  

  // Méthode pour passer à l'étape suivante
  goToNextStep() {
    this.updateInfo();
    this.next.emit();
  }

  // Méthode pour gérer la sélection de fichier
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('Fichier sélectionné:', file);
      // Vous pouvez traiter le fichier, par exemple, l'envoyer au serveur ou l'afficher en prévisualisation
    }
  }
}
