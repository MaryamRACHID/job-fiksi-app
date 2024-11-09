import { Component, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})

export class DescriptionComponent {
  @Output() descriptionInfoChange = new EventEmitter<any>();
  @Input() userType: string | null = null; // Property to receive profile type

  hasExperience: boolean = false;
  description: string = '';
  skills: string = '';

  constructor(private http: HttpClient) {}

  saveDescription() {
    this.descriptionInfoChange.emit(this.userType);
    const apiUrl = 'https://your-api-endpoint.com/saveDescription'; // Replace with your API endpoint

    const descriptionPayload = {
      hasExperience: this.hasExperience,
      description: this.description,
      skills: this.skills
    };

    this.http.post(apiUrl, descriptionPayload)
      .subscribe(
        response => {
          console.log('Description saved successfully:', response);
        },
        error => {
          console.error('Error saving description:', error);
        }
      );
  }
}
