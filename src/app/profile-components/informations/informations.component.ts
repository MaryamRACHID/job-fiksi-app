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
  @Input() personalInfo!: { gender: string; name: string; firstName: string; birthDate: string; city: string; nationality: string; id: number, imageUrl: string };
  @Input() userType: string | null = null;
  searchTerm: string = '';
  dropdownOpen: boolean = false;

  token: string | null = null;
  userId: string | null = null;

  private selectedFile: File | null = null;
  nationalities: string[] = [
    // Liste des nationalités, inchangée
  ];

  filteredNationalities: string[] = this.nationalities;

  onInputChange() {
    this.personalInfoChange.emit(this.personalInfo);
  }


  async ngOnInit() {
    try {
      this.userId = localStorage.getItem('userId');

      const data = await this.userService.getUserProfile(Number(this.userId));
      console.log('test : ', data);
      // Assurez-vous que tous les champs sont correctement assignés
      this.personalInfo = {
        gender: data.gender,
        name: data.name,
        firstName: data.firstName,
        birthDate: data.birthDate,
        city: data.city,
        nationality: data.nationality,
        id: data.id,
        imageUrl: data.imageUrl || '' // Utilisez une valeur par défaut si imageUrl est vide
      };
    } catch (error) {
      console.error('Erreur lors du chargement des informations utilisateur :', error);
    }
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
    this.searchTerm = nationality;
    this.dropdownOpen = false;
  }

  // Méthode pour fermer le dropdown
  closeDropdown() {
    setTimeout(() => this.dropdownOpen = false, 200);
  }

  // Méthode pour gérer le fichier sélectionné
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Fichier sélectionné:', this.selectedFile);
    }
  }

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {}

  saveInfo() {
    this.personalInfoChange.emit(this.userType);
    this.personalInfoChange.emit(this.personalInfo);
    console.log(this.personalInfo);

    const apiUrl = this.userType === 'candidat'
      ? 'https://jobfiksi.ismael-dev.com/api/candidats/profile/'
      : 'https://jobfiksi.ismael-dev.com/api/restaurants/profile/';

    // Créez un FormData pour envoyer les données et le fichier
    const formData = new FormData();

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    if (this.userId) {
      formData.append('user', this.userId);
    } else {
      console.error('User ID is null or undefined.');
      return; // Arrêtez l'exécution si userId est manquant
    }

    // Vérifiez que chaque champ n'est pas null ou vide avant de l'ajouter au FormData
    if (this.personalInfo.name) {
      formData.append('nom', this.personalInfo.name);
    }
    if (this.personalInfo.gender) {
      formData.append('genre', this.personalInfo.gender);
    }
    if (this.personalInfo.firstName) {
      formData.append('prenom', this.personalInfo.firstName);
    }
    if (this.personalInfo.birthDate) {
      formData.append('date_naissance', this.personalInfo.birthDate);
    }
    if (this.personalInfo.city) {
      formData.append('ville_naissance', this.personalInfo.city);
    }
    if (this.personalInfo.nationality) {
      formData.append('nationalite', this.personalInfo.nationality);
    }

    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    this.http.put(apiUrl, formData, { headers }).subscribe(
      response => {
        console.log('Données et fichier enregistrés avec succès:', response);
      },
      error => {
        console.error('Erreur lors de l\'enregistrement des données et du fichier:', error);
        if (error.error) {
          console.error('Détails de l\'erreur:', error.error);
        }
      }
    );
  }
}
