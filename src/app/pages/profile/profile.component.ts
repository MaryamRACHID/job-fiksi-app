import {Component, Output,OnInit, EventEmitter, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DisponibilitesComponent} from '../../profile-components/disponibilites/disponibilites.component';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Output() userTypeSelected = new EventEmitter<string>();
  user: any = null
  isLoading: boolean = true;

 
  isError: boolean = false;  // Indicateur d'erreur
  errorMessage: string = '';  // Message d'erreur
  constructor(private userService: UserService , private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = +params['id'];  // Récupérer l'ID de l'utilisateur depuis les paramètres de l'URL
      
      this.loadUserProfile(+userId);  // Passer l'ID à la méthode pour charger le profil
      
    });
  }

  // Méthode pour charger le profil de l'utilisateur
  async loadUserProfile(userId: number) {
    try {
      this.user = await this.userService.getUserProfile(userId);  // Passer l'ID à la méthode getUserProfile du service
      this.isLoading = false;  // Mettre fin au chargement
    } catch (error) {
      console.error('Erreur lors du chargement du profil :', error);
      this.isError = true;  // Afficher un message d'erreur
      this.errorMessage = 'Erreur lors du chargement du profil';  // Message d'erreur
      this.isLoading = false;
    }
  }
  
  step: number = 1;

  // Shared data properties
  userType: string | null = null;
  personalInfo = { name: '', firstName: '', birthDate: '' };
  availability: string[] = [];
  references = { hasExperience: false, description: '', skills: '' };
  formation = { level: '', diplomas: [] };
  experience = [];
  languages: string[] = [];
  contactInfo = { phone: '', address: '', postalCode: '', city: '' };

  // New properties for steps 9 and 10
  preferences: any = { preferredJobTypes: [], locations: [] };
  notifications: any = { emailNotifications: false, smsNotifications: false };

  @ViewChild(DisponibilitesComponent) disponibilitesComponent!: DisponibilitesComponent;

  // Navigate to the next step
  goToNextStep() {
    // Ensure userType is selected before advancing from step 1
    if (this.step === 1 && !this.userType) {
      return;
    }
    if (this.step === 4) {
      // Appelez la méthode save() du composant enfant
      this.saveAvailability();
    }
    this.step++;
  }
  saveAvailability() {
    // Ici, vous appelez la méthode save() sur le composant enfant si vous avez une référence à celui-ci
    const childComponent = this.disponibilitesComponent; // Référence au composant enfant
    if (childComponent) {
      childComponent.save();
    }
  }
  // Navigate to the previous step

  goToPreviousStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  // Update methods for child components to share data with parent
  updateUserType(data: string) {
    this.userType = data;
    this.userTypeSelected.emit(data);
  }

  updatePersonalInfo(data: any) {
    this.personalInfo = data;
  }

  updateAvailability(data: string[]) {
    this.availability = data;
  }

  updateReferences(data: any) {
    this.references = data;
  }

  updateFormation(data: any) {
    this.formation = data;
  }

  updateExperience(data: any) {
    this.experience = data;
  }

  updateLanguages(data: string[]) {
    this.languages = data;
  }

  updateContactInfo(data: any) {
    this.contactInfo = data;
  }

  // New update methods for steps 9 and 10
  updatePreferences(data: any) {
    this.preferences = data;
  }

  updateNotifications(data: any) {
    this.notifications = data;
  }

  // Save profile data and navigate to the next section
  saveProfile() {
    // Logic to save or submit the complete profile information
    console.log("Profile saved", {
      userType: this.userType,
      personalInfo: this.personalInfo,
      availability: this.availability,
      references: this.references,
      formation: this.formation,
      experience: this.experience,
      languages: this.languages,
      contactInfo: this.contactInfo,
      preferences: this.preferences, // Added for step 9
      notifications: this.notifications // Added for step 10
    });
    // Navigate to another route if needed, e.g., after completing the profile setup
  }
  skip() {
    // Logique pour abandonner
  }
}



/*
import { Component, ViewChild } from '@angular/core';
import { DisponibilitesComponent } from './disponibilites/disponibilites.component'; // Importez le composant

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  step: number = 1; // ou autre valeur selon votre logique
  userType: boolean = false; // Ajoutez votre logique pour l'utilisateur

  @ViewChild(DisponibilitesComponent) disponibilitesComponent!: DisponibilitesComponent;

  availabilityData: any = {}; // Pour stocker les données de disponibilité

  goToNextStep() {
    // Si c'est l'étape 4, appelez la méthode save() du composant disponibilites
    if (this.step === 4) {
      this.disponibilitesComponent.save(); // Appelle la méthode save pour émettre les données
      return; // Empêche de passer à l'étape suivante tant que les données ne sont pas sauvegardées
    }

    // Vérifiez si userType est sélectionné avant d'avancer
    if (this.step === 1 && !this.userType) {
      return;
    }

    this.step++; // Avance à l'étape suivante
  }

  updateAvailability(event: any) {
    this.availabilityData = event; // Récupère les données de disponibilité
  }
}

 */
