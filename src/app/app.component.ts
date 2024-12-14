// src/app/app.component.ts
import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {UserService} from './services/user.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  //imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  token: string | null = ''; // Remplacez par un token valide
  userId: string | null = ''; // Remplacez par un token valide
  static userType: string | null = null;
  static userTypeSubject = new Subject<string | null>();
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userId = localStorage.getItem('userId');

    if (!this.token) {
      this.router.navigate(['/login']);
    } else {
      this.userService.getUserProfile(Number(this.userId))
        .then((profile) => {
          console.log('Profil utilisateur :', profile);
          AppComponent.userType = profile.user_type;
          AppComponent.userTypeSubject.next(profile.user_type); // Notifie les abonnés
          this.userService.setUserType(profile.user_type);

        })
        .catch((error) => {
          console.error('Erreur lors de la récupération du profil :', error);
        });
    }
  }
  // ngOnInit(): void {
  //   // Récupérer le token et userId depuis localStorage
  //   this.token = localStorage.getItem('token');

  //   // Vérifiez si le token existe, sinon redirigez l'utilisateur
  //   if (!this.token) {
  //     // L'utilisateur n'est pas authentifié, rediriger vers la page de connexion
  //     this.router.navigate(['/login']);
  //   } else {
  //     console.log('Token récupéré :', this.token);
  //   }
  // }

}

