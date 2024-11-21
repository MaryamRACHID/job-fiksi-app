import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class OffresService {
  private apiUrl = 'https://jobfiksi.ismael-dev.com/api/annonces/';
  constructor() { }

  async getOffres() {
    const token = localStorage.getItem('token');
    return axios.get(this.apiUrl, {
      headers: {
        'Authorization': 'token ' + token,
        
      }
    }
    )
      .then(response => response.data)
      .catch(error => {
        console.error('There was an error!', error);
        //return [];
        throw error;
      });
  }

  async getOffre(id: number) {
    const token = localStorage.getItem('token');
    return axios.get(`${this.apiUrl}${id}`, {
      headers: {
        'Authorization': 'token ' + token,
       
      }
    })
    .then(response => response.data)
    .catch(error => {
      console.error('There was an error!', error);
      throw error;
    });
  }
}
