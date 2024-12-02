import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormDataService} from '../../services/form-data.service';

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
  competences: string = '';
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

  constructor(private router: Router, private formDataService: FormDataService) {}

  ngOnInit() {
    // Charger les données déjà saisies
    const savedData = this.formDataService.getFormData('prerequisitesInfo');
    if (savedData) {
      this.education = savedData.education || this.education;
      this.competences = savedData.competences || this.competences;
      this.availabilityInfo = savedData.availabilityInfo || this.availabilityInfo;
      this.timeSlots = savedData.timeSlots || this.timeSlots;
    }
  }

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

  // Passer à l'étape suivante
  goToNextStep() {
    // Stocker les données saisies dans le service
    this.formDataService.setFormData('prerequisitesInfo', {
      education: this.education,
      availabilityInfo: this.availabilityInfo,
      timeSlots: this.timeSlots,
    });

    // Naviguer vers l'étape suivante
    this.router.navigate(['/addPost/interviewSlots']);
  }

  goToPreviousStep() {
    this.router.navigate(['/addPost/base']);
  }
}
