import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Output() userTypeSelected = new EventEmitter<string>();

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

  // Navigate to the next step
  goToNextStep() {
    // Ensure userType is selected before advancing from step 1
    if (this.step === 1 && !this.userType) {
      return;
    }
    this.step++;
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
}
