import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = 'http://127.0.0.1:8000/api/users/'; // URL de votre API directement ici
 
  constructor() { }

  // Méthode d'inscription
  async registerUser(data: any) {
    try {
      const response = await axios.post(this.apiUrl, data) // L'URL est maintenant pointée directement vers /users/
        ;
      return response.data;
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }

  // Méthode de connexion (si vous avez un endpoint pour la connexion)
  async loginUser(data: any) {
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', data) 
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }


  // Méthode pour récupérer un utilisateur par ID
  async getUserProfile(id: number) {
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': 'Token ' + token };
    try {
      // Construire l'URL dynamique avec l'ID de l'utilisateur
      const response = await axios.get(this.apiUrl+id+'/', { headers: headers });
      return response.data;  // Retourner les données de l'utilisateur
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur :', error);
      throw error;
    }
  }


  
}
