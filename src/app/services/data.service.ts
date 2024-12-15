import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  // Sauvegarder annonce et restaurant dans localStorage
  setAnnonceAndRestaurant(annonce: any, restaurant: any): void {
    localStorage.setItem('annonce', JSON.stringify(annonce));
    localStorage.setItem('restaurant', JSON.stringify(restaurant));
  }

  // Récupérer annonce depuis localStorage
  getAnnonce(): any {
    const storedAnnonce = localStorage.getItem('annonce');
    return storedAnnonce ? JSON.parse(storedAnnonce) : null;
  }

  // Récupérer restaurant depuis localStorage
  getRestaurant(): any {
    const storedRestaurant = localStorage.getItem('restaurant');
    return storedRestaurant ? JSON.parse(storedRestaurant) : null;
  }

  // Sauvegarder candidat dans localStorage
  setCandidat(candidat: any): void {
    localStorage.setItem('candidat', JSON.stringify(candidat));
  }

  // Récupérer candidat depuis localStorage
  getCandidat(): any {
    const storedCandidat = localStorage.getItem('candidat');
    return storedCandidat ? JSON.parse(storedCandidat) : null;
  }

  // Nettoyer les données stockées
  clearData(): void {
    localStorage.removeItem('candidat');
    localStorage.removeItem('annonce');
    localStorage.removeItem('restaurant');
  }
}
