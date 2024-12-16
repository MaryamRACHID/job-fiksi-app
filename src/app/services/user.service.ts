import { Injectable } from '@angular/core';
import axios from 'axios';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jobfiksi.ismael-dev.com/api/users/';
  private authStatus = new BehaviorSubject<boolean>(false);
  private userTypeSubject = new BehaviorSubject<string | null>(null);
  userType$ = this.userTypeSubject.asObservable();

  constructor() {}

  setUserType(userType: string | null) {
    this.userTypeSubject.next(userType);
  }

  getUserType(): string | null {
    return this.userTypeSubject.getValue();
  }

  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem('token');
    const isAuthenticated = !!token; // Si le token existe, l'utilisateur est authentifié
    this.authStatus.next(isAuthenticated); // Met à jour l'état d'authentification
    return this.authStatus.asObservable(); // Retourne l'observable
  }



  private setAuthenticated(status: boolean): void {
    this.authStatus.next(status);
  }

  async registerUser(data: { username: string; email: string; password: string; user_type: string }) {
    try {
      const response = await axios.post(this.apiUrl, data);
      return response.data;
    } catch (error: any) {
      console.error('Erreur lors de l\'inscription :', error);
      throw new Error(error?.response?.data?.message || 'Une erreur s\'est produite lors de l\'inscription.');
    }
  }

  async loginUser(data: { username: string; password: string }) {
    try {
      const response = await axios.post('https://jobfiksi.ismael-dev.com/login/', data);
      console.log('Réponse API:', response.data);

      const user = response.data.user;

      if (user && user.token) {
        localStorage.setItem('token', user.token);
        localStorage.setItem('userId', user.id.toString());
        localStorage.setItem('userType', user.user_type.toString());

        this.setAuthenticated(true);
        return user; // Retourne les données utilisateur
      } else {
        throw new Error('Identifiants invalides.');
      }
    } catch (error: any) {
      console.error('Erreur lors de la connexion :', error);
      throw new Error(error?.response?.data?.message || 'Une erreur s\'est produite lors de la connexion.');
    }
  }

  async getUserProfile(id: number) {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Token ${token}` };

    try {
      const response = await axios.get(`${this.apiUrl}${id}/`, { headers });
      return response.data;
    } catch (error: any) {
      console.error('Erreur lors de la récupération du profil utilisateur :', error);
      throw new Error('Impossible de récupérer le profil utilisateur.');
    }
  }


  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.setAuthenticated(false);
  }
}