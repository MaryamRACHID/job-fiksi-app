import { Component, Output, Input, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent {
  @Output() personalInfoChange = new EventEmitter<any>();
  @Input() personalInfo!: { name: string; firstName: string; birthDate: string; city: string; nationality: string; id: number };
  @Input() userType: string | null = null;
  searchTerm: string = ''; // User's input in the search field
  dropdownOpen: boolean = false; // To control dropdown visibility

  private selectedFile: File | null = null;
  nationalities: string[] = [
    // Liste des nationalités, inchangée
  ];

  filteredNationalities: string[] = this.nationalities;

  onInputChange() {
    this.personalInfoChange.emit(this.personalInfo);
  }

  // Méthode pour filtrer les nationalités
  filterNationalities() {
    this.filteredNationalities = this.nationalities.filter(nationality =>
      nationality.toLowerCase().startsWith(this.searchTerm.toLowerCase())
    );
  }

  // Méthode pour sélectionner une nationalité
  selectNationality(nationality: string) {
    this.personalInfo.nationality = nationality;
    this.searchTerm = nationality; // Set input to selected nationality
    this.dropdownOpen = false; // Close dropdown
  }

  // Méthode pour fermer le dropdown
  closeDropdown() {
    setTimeout(() => this.dropdownOpen = false, 200);
  }

  // Méthode pour gérer le fichier sélectionné
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];  // Stocke le fichier sélectionné
      console.log('Fichier sélectionné:', this.selectedFile);
    }
  }

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {}

  token: string | null = null;
  userId: string | null = null;


  saveInfo() {
    this.personalInfoChange.emit(this.userType);
    this.personalInfoChange.emit(this.personalInfo);
    console.log(this.personalInfo);

    const candidateId = 9; // À ajuster si nécessaire
    const apiUrl = `https://jobfiksi.ismael-dev.com/api/candidats/profile/`;  // L'URL avec la barre oblique

    // Créez un FormData pour envoyer les données et le fichier
    const formData = new FormData();

    // Vérifiez que chaque champ n'est pas null ou vide avant de l'ajouter au FormData
    if (this.personalInfo.name) {
      formData.append('nom', this.personalInfo.name);
    }
    if (this.personalInfo.firstName) {
      formData.append('prenom', this.personalInfo.firstName);
    }
    if (this.personalInfo.birthDate) {
      formData.append('date_naissance', this.personalInfo.birthDate);
    }

    // Si un fichier a été sélectionné, ajoutez-le au FormData
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    // Récupérer l'en-tête d'authentification
    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    // Affichage des en-têtes pour débogage
    console.log('En-têtes de la requête:', headers);

    // Utilisez PUT ou PATCH si l'API le nécessite (ici j'utilise PUT comme exemple)
    this.http.put(apiUrl, formData, { headers }).subscribe(
      response => {
        console.log('Données et fichier enregistrés avec succès:', response);
      },
      error => {
        // Loggez l'erreur complète pour déboguer
        console.error('Erreur lors de l\'enregistrement des données et du fichier:', error);
        if (error.error) {
          console.error('Détails de l\'erreur:', error.error);
        }
        alert('Une erreur est survenue lors de l\'enregistrement des données.');
      }
    );
  }



}
