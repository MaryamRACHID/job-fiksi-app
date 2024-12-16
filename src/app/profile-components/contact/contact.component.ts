import {Component, Output, EventEmitter, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent  {
  @Output() contactInfoChange = new EventEmitter<any>();

  @Input() contactInfo!: { phone: string, rue: string, postalCode: string, city: string};
  @Input() userType: string | null = null; // Propriété pour recevoir le type de profil
  contact = {
    phone: '',
    rue: '',
    postalCode: '',
    city: ''
  };

  token: string | null = null;
  userId: string | null = null;

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {}

  onInputChange() {
    this.contactInfoChange.emit(this.contactInfo);
  }

  saveContact() {
    this.contactInfo = { ...this.contact }; // Synchronisation
    localStorage.setItem('contactInfo', JSON.stringify(this.contactInfo)); // Sauvegarde locale
    this.contactInfoChange.emit(this.contactInfo); // Émission des données mises à jour

    console.log(this.contactInfo)

    const apiUrl = this.userType === 'candidat'
      ? 'https://jobfiksi.ismael-dev.com/api/candidats/profile/'
      : 'https://jobfiksi.ismael-dev.com/api/restaurants/profile/';

    const formData = new FormData();

    formData.append('nom', 'this.contactInfo.phone');

    if (this.contactInfo.phone) {
      formData.append('tel', this.contactInfo.phone);
    }
    if (this.contactInfo.rue) {
      formData.append('num_et_rue', this.contactInfo.rue);
    }
    if (this.contactInfo.postalCode) {
      formData.append('code_postal', this.contactInfo.postalCode);
    }
    if (this.contactInfo.city) {
      formData.append('ville', this.contactInfo.city);
    }

    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    this.http.patch(apiUrl, formData, { headers }).subscribe(
      response => {
        console.log('Données et fichier enregistrés avec succès:', response);
      },
      error => {
        console.error('Erreur lors de l\'enregistrement des données et du fichier:', error);
        //alert('Une erreur est survenue lors de l\'enregistrement des données.');
      }
    );
  }

}
