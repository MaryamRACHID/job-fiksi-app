import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-prerequisites',
  templateUrl: './prerequisites.component.html',
  styleUrls: ['./prerequisites.component.scss']
})
export class PrerequisitesComponent {

  ageMins: string[] = [
    '16 ans',
    '18 ans',
    'Autre'
  ];

  modes: string[] = [
    'En présentiel',
    'Par téléphone',
    'Autre'
  ];

  education = { level: '', certificates: '' };
  educationLevels = ['Bac', 'Bac+2', 'Bac+3', 'Bac+5', 'Doctorat'];
  filteredEducationLevels: string[] = [...this.educationLevels];
  showDropdown: boolean = false;

  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  availabilityInfo: { [key: string]: boolean } = {
    'Lundi': false, 'Mardi': false, 'Mercredi': false, 'Jeudi': false,
    'Vendredi': false, 'Samedi': false, 'Dimanche': false
  };

  timeSlots = [
    { id: 'morning', label: 'Matin', selected: false },
    { id: 'afternoon', label: 'Après-midi', selected: false },
    { id: 'evening', label: 'Soir', selected: false },
    { id: 'autre', label: 'Autre', selected: false }
  ];

  apiUrl = 'https://jobfiksi.ismael-dev.com/api/annonces/'; // Remplacez par l'API appropriée
  token: string | null = 'your_token_here'; // Remplacez par un token valide

  constructor(private router: Router, private http: HttpClient) {}

  // Filtrage des niveaux d'éducation en fonction de l'entrée de l'utilisateur
  filterEducationLevels() {
    const searchTerm = this.education.level.toLowerCase();
    this.filteredEducationLevels = this.educationLevels.filter(level =>
      level.toLowerCase().includes(searchTerm)
    );
    this.showDropdown = this.filteredEducationLevels.length > 0;
  }

  // Sélectionner un niveau d'éducation
  selectLevel(level: string) {
    this.education.level = level;
    this.showDropdown = false;  // Cacher la liste déroulante après la sélection
  }

  // Cacher la liste déroulante quand l'entrée perd le focus
  hideDropdown() {
    setTimeout(() => { this.showDropdown = false; }, 100);  // Délai pour la sélection
  }

  // Gestion des changements pour la disponibilité
  onDayChange(day: string) {
    this.availabilityInfo[day] = !this.availabilityInfo[day];
  }

  // Envoi des données et passage à l'étape suivante
  goToNextStep() {
    const formData = new FormData();
    formData.append('age_min', this.education.level);
    formData.append('education_level', this.education.level);
    formData.append('skills', this.education.certificates);  // Certificats ou compétences
    formData.append('availability', JSON.stringify(this.availabilityInfo));  // Disponibilité
    formData.append('time_slots', JSON.stringify(this.timeSlots.filter(slot => slot.selected))); // Plages horaires sélectionnées

    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    this.http.post(this.apiUrl, formData, { headers }).subscribe(
      response => {
        console.log('Données enregistrées avec succès:', response);
        //this.router.navigate(['/addPost/interviewSlots']);
      },
      error => {
        console.error('Erreur lors de l\'enregistrement des données:', error);
        this.router.navigate(['/addPost/interviewSlots']);
        //alert('Une erreur est survenue lors de l\'enregistrement.');
      }
    );
  }

  goToPreviousStep() {
    this.router.navigate(['/addPost/base']);
  }
}
