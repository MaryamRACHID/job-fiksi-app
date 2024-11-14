import { Component, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  @Output() experienceInfoChange = new EventEmitter<any>();
  @Input() userType: string | null = null;

  experiences = [{ title: '', company: '', startDate: '', endDate: '' }];
  spokenLanguages: { french: boolean; english: boolean; other: string } = {
    french: false,
    english: false,
    other: ''
  };

  constructor(private http: HttpClient) {}

  // Add a new experience entry
  addExperience() {
    this.experiences.push({ title: '', company: '', startDate: '', endDate: '' });
  }

  // Save the experience data
  saveExperience() {
    this.experienceInfoChange.emit(this.userType);

    const apiUrl = 'https://your-api-endpoint.com/saveExperience';  // Replace with your actual API endpoint

    const experiencePayload = {
      experiences: this.experiences,
      spokenLanguages: this.spokenLanguages
    };

    // Send data to the API
    this.http.post(apiUrl, experiencePayload)
      .subscribe(
        response => {
          console.log('Experience saved successfully:', response);
        },
        error => {
          console.error('Error saving experience:', error);
        }
      );
  }
}
