import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private annonce: any;
  private restaurant: any;

  constructor() { }

  setAnnonceAndRestaurant(annonce: any, restaurant: any): void {
    this.annonce = annonce;
    this.restaurant = restaurant;
  }

  getAnnonce(): any {
    return this.annonce;
  }

  getRestaurant(): any {
    return this.restaurant;
  }
}
