import { Component, Output, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisponibilitesComponent } from '../../profile-components/disponibilites/disponibilites.component';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Output() userTypeSelected = new EventEmitter<string>();
  @ViewChild(DisponibilitesComponent) disponibilitesComponent!: DisponibilitesComponent;

  user: any = null;
  isLoading: boolean = true;
  isError: boolean = false;
  errorMessage: string = '';
  step: number = 1;

  // Shared data properties
  userType: string = '';
  personalInfo: any = { nom: '', prenom: '', date_naissance: '' };
  availability: string[] = [];
  references = { hasExperience: false, description: '', skills: '' };
  formation = { level: '', diplomas: [] };
  experience = [];
  languages: string[] = [];
  contactInfo = { phone: '', address: '', postalCode: '', city: '' };
  preferences: any = { preferredJobTypes: [], locations: [] };
  notifications: any = { emailNotifications: false, smsNotifications: false };

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const userId = +params['id'];
      this.loadUserProfile(userId);
    });
  }

  async loadUserProfile(userId: number) {
    try {
      this.user = await this.userService.getUserProfile(userId);
      if (this.user.image) {
        this.user.image = `https://jobfiksi.ismael-dev.com${this.user.image}`;
      }
      this.isLoading = false;
    } catch (error) {
      console.error('Erreur lors du chargement du profil :', error);
      this.isError = true;
      this.errorMessage = 'Erreur lors du chargement du profil';
      this.isLoading = false;
    }
  }

  // Step navigation methods
  goToNextStep() {
    if (this.step === 1 && !this.userType) {
      return; // Prevent advancing if userType is not selected
    }
    
    this.saveCurrentStepData(); // Save data before moving to the next step
    if (this.step === 4) {
      this.saveAvailability();
    }
    this.step++;
  }

  goToPreviousStep() {
    this.saveCurrentStepData(); // Save data before moving to the previous step
    if (this.step > 1) {
      this.step--;
    }
  }

  // Save data for the current step
  saveCurrentStepData() {
    switch (this.step) {
      case 1:
        console.log('User type saved:', this.userType);
        break;
      case 2:
        console.log('Personal info saved:', this.personalInfo);
        break;
      case 3:
        console.log('Availability saved:', this.availability);
        break;
      case 4:
        console.log('References saved:', this.references);
        break;
      case 5:
        console.log('Formation saved:', this.formation);
        break;
      case 6:
        console.log('Experience saved:', this.experience);
        break;
      case 7:
        console.log('Languages saved:', this.languages);
        break;
      case 8:
        console.log('Contact info saved:', this.contactInfo);
        break;
      case 9:
        console.log('Preferences saved:', this.preferences);
        break;
      case 10:
        console.log('Notifications saved:', this.notifications);
        break;
      default:
        console.log('Unknown step, nothing to save.');
    }
  }

  // Child component interaction
  saveAvailability() {
    if (this.disponibilitesComponent) {
      this.disponibilitesComponent.save();
    }
  }

  // Update methods for shared data
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

  updatePreferences(data: any) {
    this.preferences = data;
  }

  updateNotifications(data: any) {
    this.notifications = data;
  }

  // Save profile data
  saveProfile() {
    console.log('Profile saved', {
      userType: this.userType,
      personalInfo: this.personalInfo,
      availability: this.availability,
      references: this.references,
      formation: this.formation,
      experience: this.experience,
      languages: this.languages,
      contactInfo: this.contactInfo,
      preferences: this.preferences,
      notifications: this.notifications,
    });
  }

  skip() {
    console.log('Profile update skipped');
  }
}
