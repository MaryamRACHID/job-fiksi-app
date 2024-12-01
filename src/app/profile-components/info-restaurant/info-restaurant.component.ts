import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-info-restaurant',
  templateUrl: './info-restaurant.component.html',
  styleUrls: ['./info-restaurant.component.scss']
})
export class InfoRestaurantComponent {
  @Output() restaurantInfoChange = new EventEmitter<any>();

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

  constructor(private http: HttpClient) {}

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

  saveRestaurantInfo(){
    console.log("passe")
  }
}
