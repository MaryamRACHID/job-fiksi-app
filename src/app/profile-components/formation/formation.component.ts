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
    this.formationInfoChange.emit(this.userType);
    const apiUrl = 'https://your-api-endpoint.com/saveFormation';  // Replace with your API endpoint

    const formationPayload = {
      education: this.education,
      diplomas: this.diplomas
    };

    this.http.post(apiUrl, formationPayload)
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
