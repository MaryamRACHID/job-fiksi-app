import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service'; // Importer le service UserService
import { trigger, transition, style, animate } from '@angular/animations'; // Importer les animations

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ]),
    trigger('toggleTab', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.3s ease-in', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class LoginComponent {
  currentToggle: string = 'inscription'; // Valeur par défaut
  loginData = { username: '', password: '' }; // Données de connexion
  registrationData = { username: '', email: '', password: '', userType: '' }; // Données d'inscription
  isSuccess = false; // Pour afficher les messages de succès
  isError = false; // Pour afficher les messages d'erreur
  successMessage = ''; // Message de succès
  errorMessage = ''; // Message d'erreur

  constructor(private router: Router, private userService: UserService) {}

  // Méthode pour rediriger vers le profil
  goToProfil() {
    this.router.navigate(['/profil']);
  }

  // Méthode pour changer d'onglet (connexion ou inscription)
  setToggle(value: string) {
    this.currentToggle = value;
  }

  async loginUser() {
    const { username, password } = this.loginData;
    const data = { username, password };

    try {
        const response = await this.userService.loginUser(data); // Utiliser le service pour effectuer la connexion

        // Accéder directement au token dans la structure
        const token = response.user.token;
        const userId = response.user.id;
        if (token) {
            // Stocker le token dans localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
            console.log('Token récupéré et stocké :', token + ' pour l\'utilisateur ' + userId);
        } else {
            console.error("Token non trouvé dans la réponse.");
        }

        // En cas de succès
        this.isSuccess = true;
        this.successMessage = 'Connexion réussie ! Redirection en cours... '+ token;

        setTimeout(() => {
            this.router.navigate(['/profil', userId]); // Rediriger vers le profil de l'utilisateur
        }, 1000);

    } catch (error) {
        this.isError = true;
        this.errorMessage = 'Échec de la connexion. Veuillez vérifier vos informations.';
        console.error('Erreur lors de la connexion :', error);
    }
}


  

  // Méthode pour l'inscription
  registerUser() {
    const { username, email, password, userType } = this.registrationData;
    const data = { username, email, password, user_type: userType };

    this.userService.registerUser(data).then(response => {
      this.isSuccess = true;
      this.successMessage = 'Inscription réussie !';

      // Animer avant de rediriger
      setTimeout(() => {
        this.setToggle('connexion'); // Passer à l'onglet connexion après inscription réussie
      }, 1000);  // Le délai ici doit correspondre à la durée de l'animation
    }).catch(error => {
      this.isError = true;
      this.errorMessage = 'Erreur d\'inscription. Veuillez réessayer.';
    });
  }
}
