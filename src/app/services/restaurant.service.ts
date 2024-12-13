// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RestaurantService {

//   constructor() { }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = 'api/restaurants/profile'; // URL de votre API

  constructor(private http: HttpClient) {}

  getRestaurantProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/?name=restaurant-profile`);
  }
}
