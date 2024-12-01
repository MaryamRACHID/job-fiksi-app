import { Component, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  token: string | null = null;

  constructor(private http: HttpClient) {}

  saveDescription() {
    this.descriptionInfoChange.emit(this.userType);

    const apiUrl = 'https://jobfiksi.ismael-dev.com/api/candidats/profile/';  // L'URL avec la barre oblique

    const descriptionPayload = {
      hasExperience: this.hasExperience,
      description: this.description,
      skills: this.skills
    };

    const formData = new FormData();
    formData.append('hasExperience', JSON.stringify(this.hasExperience));
    formData.append('description', this.description);
    formData.append('skills', this.skills);

    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    this.http.put(apiUrl, formData, { headers }).subscribe(
      response => {
        console.log('Description saved successfully:', response);
      },
      error => {
        console.error('Error saving description:', error);
        alert('Une erreur est survenue lors de l\'enregistrement de la description.');
      }
    );
  }
}
