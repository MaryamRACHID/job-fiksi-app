import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-prerequisites',
  templateUrl: './prerequisites.component.html',
  styleUrl: './prerequisites.component.scss'
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
  education = { level: '', certificates: '' };  // Education level entered
  educationLevels = ['Bac', 'Bac+2', 'Bac+3', 'Bac+5', 'Doctorat'];  // Education levels list
  filteredEducationLevels: string[] = [...this.educationLevels];  // Filtered education levels
  showDropdown: boolean = false;  // Controls the dropdown visibility
  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  availabilityInfo: { [key: string]: boolean } = {
    'Lundi': false,
    'Mardi': false,
    'Mercredi': false,
    'Jeudi': false,
    'Vendredi': false,
    'Samedi': false,
    'Dimanche': false
  };
  timeSlots = [
    { id: 'morning', label: 'Matin', selected: false },
    { id: 'afternoon', label: 'Après-midi', selected: false },
    { id: 'evening', label: 'Soir', selected: false },
    { id: 'autre', label: 'Autre', selected: false }
  ];


  constructor(private router: Router) {}

  // Filter education levels based on input
  filterEducationLevels() {
    const searchTerm = this.education.level.toLowerCase();
    this.filteredEducationLevels = this.educationLevels.filter(level =>
      level.toLowerCase().includes(searchTerm)
    );
    this.showDropdown = this.filteredEducationLevels.length > 0;
  }

  // Select an education level
  selectLevel(level: string) {
    this.education.level = level;
    this.showDropdown = false;  // Hide dropdown after selection
  }

  // Hide dropdown when input loses focus
  hideDropdown() {
    setTimeout(() => { this.showDropdown = false; }, 100);  // Timeout for selection
  }


  goToNextStep() {
    // Logique pour abandonner
    this.router.navigate(['/addPost/interviewSlots']);

  }
  goToPreviousStep() {
    this.router.navigate(['/addPost/jobInformation']);
  }

  onDayChange(day: string) {
    this.availabilityInfo[day] = !this.availabilityInfo[day];
  }
}
