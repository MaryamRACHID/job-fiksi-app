import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FiltreCandidatService {
  private apiUrl = 'https://jobfiksi.ismael-dev.com/api/candidats/';

  constructor() {}

  /**
   * Récupère la liste des candidats en fonction des filtres sélectionnés.
   * @param filters - L'objet contenant les filtres sélectionnés.
   * @returns Une promesse contenant la liste des candidats.
   */
  async getCandidatsByFiltre(filters: { [key: string]: any }): Promise<any[]> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Token ${token}` };

    try {
      // Appelle l'API en passant les filtres dans le corps de la requête
      const response = await axios.post(this.apiUrl + 'filtre', filters, { headers });
      return response.data; // Retourne les données des candidats
    } catch (error: any) {
      console.error('Erreur lors de la récupération des candidats :', error);
      throw new Error(error?.response?.data?.message || 'Impossible de récupérer la liste des candidats.');
    }
  }
}
