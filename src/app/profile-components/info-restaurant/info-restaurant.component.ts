import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-info-restaurant',
  templateUrl: './info-restaurant.component.html',
  styleUrl: './info-restaurant.component.scss'
})
export class InfoRestaurantComponent {
  @Output() restaurantInfoChange = new EventEmitter<any>();

  @Input() contactInfo!: { phone: string, address: string, postalCode: string, city: string};
  @Input() userType: string | null = null; // Propriété pour recevoir le type de profil
  infoRestaurant = {
    name: '',
    type: '',
    address: '',
    GSM: '',
    email: '',
    website: ''
  };

  onRestaurantUpdate() {
    this.restaurantInfoChange.emit(this.infoRestaurant);
    this.restaurantInfoChange.emit(this.userType);
  }
}

