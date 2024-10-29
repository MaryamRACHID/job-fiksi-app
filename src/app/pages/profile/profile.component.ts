import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Output() userTypeSelected = new EventEmitter<string>();

  // Step management
  step: number = 1;

  // Shared data properties
  userType: string | null = null;
  personalInfo = { name: '', firstName: '', birthDate: '' };
  contactInfo = { phone: '', address: '', postalCode: '', city: '' };
  availability: string[] = [];
  references = { hasExperience: false, description: '', skills: '' };
  formation = { level: '', diplomas: [] };
  experience: any[] = [];
  preferences: any = { preferredJobTypes: [], locations: [] };
  notifications: any = { emailNotifications: false, smsNotifications: false };

  // Method to navigate to the next step
  goToNextStep() {
    if (this.step === 1 && !this.userType) return; // Prevent going forward without user type
    this.step++; // Navigate to the next step
  }

  // Method to navigate to the previous step
  goToPreviousStep() {
    if (this.step > 1) this.step--;
  }

  // Update methods for each section
  updateUserType(data: string) {
    this.userType = data;
    this.userTypeSelected.emit(data);
  }

  updatePersonalInfo(data: any) {
    this.personalInfo = data;
  }

  updateContactInfo(data: any) {
    this.contactInfo = data;
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

  updatePreferences(data: any) {
    this.preferences = data;
  }

  updateNotifications(data: any) {
    this.notifications = data;
  }

  // Save the complete profile data
  saveProfile() {
    console.log("Profile saved:", {
      userType: this.userType,
      personalInfo: this.personalInfo,
      contactInfo: this.contactInfo,
      availability: this.availability,
      references: this.references,
      formation: this.formation,
      experience: this.experience,
      preferences: this.preferences,
      notifications: this.notifications
    });
  }
}
