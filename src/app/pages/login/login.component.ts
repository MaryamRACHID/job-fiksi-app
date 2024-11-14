import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  currentToggle: string = 'connexion'; // Valeur par défaut
  loginForm!: FormGroup; // Déclaré avec '!' pour dire à TypeScript que ce sera initialisé
  inscriptionForm!: FormGroup; // Déclaré avec '!' pour dire à TypeScript que ce sera initialisé

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    // Formulaire de connexion
    this.loginForm = this.fb.group({
      emailConnexion: ['', [Validators.required, Validators.email]],
      passwordConnexion: ['', [Validators.required]],
    });

    // Formulaire d'inscription
    this.inscriptionForm = this.fb.group(
      {
        emailInscription: ['', [Validators.required, Validators.email]],
        passwordInscription: [
          '',
          [
            Validators.required,
            Validators.minLength(12),
            this.passwordValidator, // Validateur personnalisé pour mot de passe
          ],
        ],
        confirmPassword: ['', [Validators.required]], // Confirmation du mot de passe
      },
      { validators: this.passwordMatchValidator } // Validation pour la correspondance des mots de passe
    );
  }

  // Méthode pour rediriger l'utilisateur vers la page de profil
  goToProfil(): void {
    if (this.loginForm.valid) {
      this.router.navigate(['/profil']);
    } else {
      console.log('Formulaire de connexion invalide');
    }
  }

  passwordValidator(control: any) {
    const password = control.value;

    // Si le mot de passe est vide, retourne une erreur
    if (!password) {
      return { required: true };
    }

    // Vérifie chaque critère individuellement et retourne des erreurs spécifiques
    const errors: any = {};

    // Vérification majuscule
    if (!/[A-Z]/.test(password)) {
      errors.noUppercase = true;
    }

    // Vérification chiffre
    if (!/\d/.test(password)) {
      errors.noNumber = true;
    }

    // Vérification caractère spécial
    if (!/[^\w\d\s]/.test(password)) {
      errors.noSpecialChar = true;
    }

    // Vérification longueur
    if (password.length < 12) {
      errors.tooShort = true;
    }

    // Si des erreurs existent, retourne l'objet d'erreurs
    if (Object.keys(errors).length > 0) {
      return errors;
    }

    return null; // Si aucune erreur
  }


  // Validateur pour vérifier que le mot de passe et la confirmation sont identiques
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('passwordInscription')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsDoNotMatch: true }; // Vérifie que les mots de passe sont identiques
  }

  // Soumettre le formulaire de connexion
  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      this.router.navigate(['/profil']); // Redirige l'utilisateur vers le profil
    } else {
      console.log('Formulaire de connexion invalide');
    }
  }

  // Soumettre le formulaire d'inscription
  onInscriptionSubmit(): void {
    if (this.inscriptionForm.valid) {
      console.log('Formulaire d\'inscription soumis');
      // Traiter l'inscription (par exemple, envoyer les données au backend)
    } else {
      console.log('Formulaire d\'inscription invalide');
    }
  }

  // Gérer l'activation de l'onglet Connexion / Inscription
  setToggle(value: string): void {
    this.currentToggle = value;
  }
}
