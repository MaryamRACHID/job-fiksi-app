import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info-restaurant',
  templateUrl: './info-restaurant.component.html',
  styleUrls: ['./info-restaurant.component.scss']
})
export class InfoRestaurantComponent {
  @Output() restaurantInfoChange = new EventEmitter<any>();

  @Input() contactInfo!: { phone: string, address: string, postalCode: string, city: string };
  @Input() userType: string | null = null; // Property for receiving profile type

  infoRestaurant = {
    name: '',
    type: '',
    address: '',
    GSM: '',
    email: '',
    website: ''
  };

  constructor(private http: HttpClient) {}

  saveRestaurantInfo() {
    this.restaurantInfoChange.emit(this.userType);
    const apiUrl = 'https://your-api-endpoint.com/saveRestaurantInfo'; // Replace with your API endpoint

    this.http.post(apiUrl, this.infoRestaurant)
      .subscribe(
        response => {
          console.log('Restaurant information saved successfully:', response);
        },
        error => {
          console.error('Error saving restaurant information:', error);
        }
      );
  }
}

