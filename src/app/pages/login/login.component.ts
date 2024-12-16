import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  currentToggle: string = 'connexion'; // Onglet actif (connexion ou inscription)
  loginForm!: FormGroup;
  inscriptionForm!: FormGroup;
  isSuccess = false;
  isError = false;
  successMessage = '';
  errorMessage = '';
  registrationData = {
    username: '',
    email: '',
    password: '',
    userType: ''
  };
  loginData = {
    username: '',
    password: ''
  };


  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    // Initialisation du formulaire de connexion
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Initialisation du formulaire d'inscription
    this.inscriptionForm = this.fb.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(12), this.passwordValidator]],
        confirmPassword: ['', [Validators.required]],
        userType: ['', [Validators.required]], // Type d'utilisateur (ajouté comme champ obligatoire)
      },
      { validators: this.passwordMatchValidator }
    );
  }

  // Soumettre le formulaire de connexion
  async onLoginSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
  
      try {
        // Appel au service pour connecter l'utilisateur
        const response = await this.userService.loginUser({ username, password });
        this.successMessage = 'Connexion réussie ! Redirection en cours...';
        this.isError = false;
        this.isSuccess = true;

        //récupération du type d'utilisateur
        const userType = response?.user_type; 
        if (userType === 'restaurant') {            
          setTimeout(() => this.router.navigate(['/rechercheCandidat']), 1500);
        } else if (userType=== 'candidat') {
          console.log('TODO navigate TO /accueilCandidat');
        }
        
      } catch (error: any) {
        this.isError = true;
        this.errorMessage = error?.response?.data?.message || 'Une erreur s\'est produite lors de la connexion.';
      }
    } else {
      this.isError = true;
      this.errorMessage = 'Veuillez remplir correctement le formulaire.';
    }
  }
  

  // Soumettre le formulaire d'inscription
  async onInscriptionSubmit(): Promise<void> {
    if (this.inscriptionForm.valid) {
      const { username, email, password, userType } = this.inscriptionForm.value;

      try {
        const response = await this.userService.registerUser({ username, email, password, user_type: userType });
        this.isSuccess = true;
        this.successMessage = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';

        setTimeout(() => this.setToggle('connexion'), 1500); // Basculer sur le formulaire de connexion
      } catch (error: any) {
        this.isError = true;
        this.errorMessage = error?.message || 'Une erreur s\'est produite lors de l\'inscription.';
      }
    } else {
      this.isError = true;
      this.errorMessage = 'Veuillez remplir correctement le formulaire.';
    }
  }

  // Gestion des onglets Connexion/Inscription
  setToggle(value: string): void {
    this.currentToggle = value;
  }

  // Validateur personnalisé pour les mots de passe
  passwordValidator(control: any): any {
    const password = control.value;
    const errors: any = {};

    if (!/[A-Z]/.test(password)) errors.noUppercase = true;
    if (!/\d/.test(password)) errors.noNumber = true;
    if (!/[^\w\d\s]/.test(password)) errors.noSpecialChar = true;
    if (password.length < 12) errors.tooShort = true;

    return Object.keys(errors).length > 0 ? errors : null;
  }

  // Vérification de la correspondance des mots de passe
  passwordMatchValidator(group: FormGroup): any {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsDoNotMatch: true };
  }
}