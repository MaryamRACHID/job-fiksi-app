import { Component, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  @Output() experienceInfoChange = new EventEmitter<any>();
  @Input() userType: string | null = null;
  userId: string | null = '';

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
  }

  experiences = [{ title: '', company: '', startDate: '', endDate: '' }];
  spokenLanguages: { french: boolean; english: boolean; other: string } = {
    french: false,
    english: false,
    other: ''
  };

  token: string | null = null;

  constructor(private http: HttpClient) {}

  // Add a new experience entry
  addExperience() {
    this.experiences.push({ title: '', company: '', startDate: '', endDate: '' });
  }

  // Save the experience data
  saveExperience() {
    this.experienceInfoChange.emit(this.userType);

    const apiUrl = 'https://jobfiksi.ismael-dev.com/api/candidats/profile/'; // L'URL avec la barre oblique

    const formData = new FormData();

    if (this.userId) {
      formData.append('user', this.userId);
    } else {
      console.error('User ID is null or undefined.');
      return; // Arrêtez l'exécution si userId est manquant
    }
    // Ajout des expériences dans FormData avec des noms de colonnes
    this.experiences.forEach((experience, i) => {
      formData.append(`poste_occupe`, experience.title);  // Nom de colonne: 'poste_occupe'
      formData.append(`experience`, experience.company);   // Nom de colonne: 'entreprise'
      formData.append(`date_debut`, experience.startDate); // Nom de colonne: 'date_debut'
      formData.append(`date_fin`, experience.endDate);     // Nom de colonne: 'date_fin'

    });

    // Ajout des langues parlées dans FormData
    formData.append('langues_parlees', this.spokenLanguages.french.toString());  // Nom de colonne: 'langues_parlees'
    formData.append('langues_parlees', this.spokenLanguages.english.toString());
    formData.append('langues_parlees', this.spokenLanguages.other);

    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    // Envoi de FormData avec PUT
    this.http.put(apiUrl, formData, { headers }).subscribe(
      response => {
        console.log('Experience saved successfully:', response);
      },
      error => {
        console.error('Error saving experience:', error);
        //alert('Une erreur est survenue lors de l\'enregistrement de l\'expérience.');
      }
    );
  }
}
