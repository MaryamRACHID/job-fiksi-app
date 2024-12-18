import { Component, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent {
  @Output() formationInfoChange = new EventEmitter<any>();
  @Input() userType: string | null = null; // Property to receive profile type

  diplomas = [
    { name: '', institution: '', startDate: '', endDate: '' }
  ];
  userId: string | null = '';

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
  }

  education = { level: '', certificates: '' };  // Education level entered
  educationLevels = ['Bac', 'Bac+2', 'Bac+3', 'Bac+5', 'Doctorat'];  // Education levels list
  filteredEducationLevels: string[] = [...this.educationLevels];  // Filtered education levels
  showDropdown: boolean = false;  // Controls the dropdown visibility

  constructor(private http: HttpClient) {}

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

  importLinkedInData() {
    console.log('Importing data via LinkedIn');
    // Add your logic to import data from LinkedIn
  }

  importIndeedData() {
    console.log('Importing data via Indeed');
    // Add your logic to import data from Indeed
  }

  // Add a new diploma entry
  addDiploma() {
    this.diplomas.push({ name: '', institution: '', startDate: '', endDate: '' });
  }

  // Save the education data
  saveFormation() {
    // Emit the userType value
    this.formationInfoChange.emit(this.userType);

    const apiUrl = 'https://jobfiksi.ismael-dev.com/api/candidats/profile/';  // L'URL avec la barre oblique

    // Create FormData object to send data
    const formData = new FormData();
    if (this.userId) {
      formData.append('user', this.userId);
    } else {
      console.error('User ID is null or undefined.');
      return; // Arrêtez l'exécution si userId est manquant
    }
    // Add the education data
    formData.append('niveau_etude', this.education.level);
    formData.append('certificates', this.education.certificates);

    // Add the diplomas data
    this.diplomas.forEach((diploma, i) => {
      formData.append(`formation`, diploma.name);
      formData.append(`etablissement`, diploma.institution);
      formData.append(`date_debut`, diploma.startDate);
      formData.append(`date_fin`, diploma.endDate);
    });

    // Send the FormData to the API
    this.http.put(apiUrl, formData)
      .subscribe(
        response => {
          console.log('Formation saved successfully:', response);
        },
        error => {
          console.error('Error saving formation:', error);
        }
      );
  }
}
