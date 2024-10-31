import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DisponibilitesComponent } from '../../profile-components/disponibilites/disponibilites.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Output() userTypeSelected = new EventEmitter<string>();

  step: number = 1;
  userType: string | null = null;
  personalInfo = { name: '', firstName: '', birthDate: '' };
  availability: string[] = [];
  references = { hasExperience: false, description: '', skills: '' };
  formation = { level: '', diplomas: [] };
  experience = [];
  languages: string[] = [];
  contactInfo = { phone: '', address: '', postalCode: '', city: '' };
  preferences: any = { preferredJobTypes: [], locations: [] };
  notifications: any = { emailNotifications: false, smsNotifications: false };

  @ViewChild(DisponibilitesComponent) disponibilitesComponent!: DisponibilitesComponent;

  goToNextStep() {
    if (this.step === 1 && !this.userType) {
      return;
    }
    if (this.step === 4) {
      this.saveAvailability();
    }
    this.step++;
  }

  saveAvailability() {
    const childComponent = this.disponibilitesComponent;
    if (childComponent) {
      childComponent.save();
    }
  }

  goToPreviousStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

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

  saveProfile() {
    console.log("Profile saved", {
      userType: this.userType,
      personalInfo: this.personalInfo,
      availability: this.availability,
      references: this.references,
      formation: this.formation,
      experience: this.experience,
      languages: this.languages,
      contactInfo: this.contactInfo,
      preferences: this.preferences,
      notifications: this.notifications
    });
  }

  skip() {
    // Logique pour abandonner
  }
}
