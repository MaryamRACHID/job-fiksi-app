import { Component, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile-type',
  templateUrl: './profile-type.component.html',
  styleUrls: ['./profile-type.component.scss'] // Correction de 'styleUrl' en 'styleUrls'
})
export class ProfileTypeComponent {
  @Output() userTypeChange = new EventEmitter<string>();

  @Input() userType: string | null = null; // Propriété pour recevoir le type d'utilisateur
  selectedType: string = '';

  token: string | null = null;

  constructor(private http: HttpClient) {}

  selectUserType(type: string) {
    this.selectedType = type;
    console.log(type);
    this.userTypeChange.emit(this.selectedType);
  }

  saveType() {
    this.userType = this.selectedType;
    this.userTypeChange.emit(this.userType);

    console.log(this.userType);

    /*const apiUrl = 'https://jobfiksi.ismael-dev.com/api/candidats/profile/'; // L'URL avec la barre oblique

    const formData = new FormData();
    if (this.userType) {
      formData.append('userType', this.userType);
    }

    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    this.http.put(apiUrl, formData, { headers }).subscribe(
      response => {
        console.log('User type saved successfully:', response);
      },
      error => {
        console.error('Error saving user type:', error);
        alert('Une erreur est survenue lors de l\'enregistrement du type d\'utilisateur.');
      }
    );*/
  }
}
