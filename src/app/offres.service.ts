import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class OffresService {
  private apiUrl = 'http://127.0.0.1:8000/api/annonces/';
  constructor() { }

  async getOffres() {
    return axios.get(this.apiUrl)
      .then(response => response.data)
      .catch(error => {
        console.error('There was an error!', error);
        //return [];
        throw error;
      });
  }

  async getOffre(id: number) {
    const token = '520cc373767bb0614143beb997031305b4656858';
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
