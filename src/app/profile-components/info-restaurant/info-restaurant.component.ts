import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-info-restaurant',
  templateUrl: './info-restaurant.component.html',
  styleUrls: ['./info-restaurant.component.scss']
})
export class InfoRestaurantComponent {
  @Output() restaurantInfoChange = new EventEmitter<any>();
  isvalid: boolean = true;

  @Input() userType: string | null = null; // Property for receiving profile type

  infoRestaurant = {
    name: '',
    type: '',
    code_postal: '',
    tel_pro: '',
    email_pro: '',
    site_web: ''
  };

  token: string | null = null; // Replace this with actual token fetching logic

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  /*saveRestaurantInfo() {
    const formData = new FormData();

    if (this.infoRestaurant.name) {
      formData.append('nom', this.infoRestaurant.name);
    }
    if (this.infoRestaurant.type) {
      formData.append('type_restaurant', this.infoRestaurant.type);
    }
    if (this.infoRestaurant.code_postal) {
      formData.append('code_postal', this.infoRestaurant.code_postal);
    }
    if (this.infoRestaurant.tel_pro) {
      formData.append('tel_pro', this.infoRestaurant.tel_pro);
    }
    if (this.infoRestaurant.email_pro) {
      formData.append('email_pro', this.infoRestaurant.email_pro);
    }
    if (this.infoRestaurant.site_web) {
      formData.append('site_web', this.infoRestaurant.site_web);
    }

    const apiUrl = 'https://jobfiksi.ismael-dev.com/api/restaurants/profile/';

    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    this.http.put(apiUrl, formData, { headers }).subscribe(
      response => {
        console.log('Données enregistrées avec succès:', response);
        this.restaurantInfoChange.emit(this.infoRestaurant);
      },
      error => {
        console.error('Erreur lors de l\'enregistrement des données:', error);
        alert('Une erreur est survenue lors de l\'enregistrement des données.');
      }
    );
  }*/

  @Input() restauInfo: any; // Données existantes, si disponibles
  restauForm!: FormGroup;


  userId: string | null = '';

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.restauForm = this.fb.group({
      restaurantName: [
        this.restauInfo?.restaurantName || '',
        [Validators.required, Validators.minLength(3)],
      ],
      address: [this.restauInfo?.address || '', Validators.required],
      siret: [
        this.restauInfo?.siret || '',
        [Validators.required, this.siretValidator],
      ],
      phone: [
        this.restauInfo?.phone || '',
        [Validators.required, Validators.pattern(/^\d{10}$/)], // Format 10 chiffres
      ],
      email: [
        this.restauInfo?.email || '',
        [Validators.required, Validators.email],
      ],
    });
  }

  // Validateur personnalisé pour le SIRET
  siretValidator(control: any): { [key: string]: any } | null {
    const value = control.value;
    if (!/^\d{14}$/.test(value)) {
      return { invalidSiret: true }; // SIRET doit avoir exactement 14 chiffres
    }
    return null;
  }

  onSubmit(): void {
    // Vérifier si le formulaire est valide
    if (!this.restauForm.valid) {
      // Affichage des erreurs de validation dans la console
      Object.keys(this.restauForm.controls).forEach(controlName => {
        const control = this.restauForm.get(controlName);
        if (control?.invalid && control?.touched) {
          this.isvalid = false;
          this.restaurantInfoChange.emit(this.isvalid); // Émet les nouvelles données au parent
          console.error(`Le champ ${controlName} est invalide.`, this.isvalid);
        }
      });
      // Arrêter l'exécution de la méthode si le formulaire est invalide
      return;
    }
    this.isvalid = true;
    this.restaurantInfoChange.emit(this.isvalid);

    const formData = new FormData();
    if (this.userId) {
      formData.append('user', this.userId);
    } else {
      console.error('User ID is null or undefined.');
      return; // Arrêtez l'exécution si userId est manquant
    }


    // Ajouter les données du formulaire à formData
    if (this.infoRestaurant.name) {
      formData.append('nom', this.infoRestaurant.name);
    }
    if (this.infoRestaurant.type) {
      formData.append('type_restaurant', this.infoRestaurant.type);
    }
    if (this.infoRestaurant.code_postal) {
      formData.append('code_postal', this.infoRestaurant.code_postal);
    }
    if (this.infoRestaurant.tel_pro) {
      formData.append('tel_pro', this.infoRestaurant.tel_pro);
    }
    if (this.infoRestaurant.email_pro) {
      formData.append('email_pro', this.infoRestaurant.email_pro);
    }
    if (this.infoRestaurant.site_web) {
      formData.append('site_web', this.infoRestaurant.site_web);
    }

    // URL de l'API et en-têtes
    const apiUrl = 'https://jobfiksi.ismael-dev.com/api/restaurants/profile/';
    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

  }

}
