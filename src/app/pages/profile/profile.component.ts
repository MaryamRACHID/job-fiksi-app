import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DisponibilitesComponent } from '../../profile-components/disponibilites/disponibilites.component';
import {InformationsComponent} from '../../profile-components/informations/informations.component';
import {ContactComponent} from '../../profile-components/contact/contact.component';
import {ProfileTypeComponent} from '../../profile-components/profile-type/profile-type.component';
import {DescriptionComponent} from '../../profile-components/description/description.component';
import {FormationComponent} from '../../profile-components/formation/formation.component';
import {ExperiencesComponent} from '../../profile-components/experiences/experiences.component';
import {CvComponent} from '../../profile-components/cv/cv.component';
import {PreferenceComponent} from '../../profile-components/preference/preference.component';
import {NotificationsComponent} from '../../profile-components/notifications/notifications.component';

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
  contactInfo = { phone: '', address: '', postalCode: '', city: '' };
  availability: string[] = [];
  references = { hasExperience: false, description: '', skills: '' };
  formation = { level: '', diplomas: [] };
  experience = [];
  languages: string[] = [];
  preferences: any = { preferredJobTypes: [], locations: [] };
  notifications: any = { emailNotifications: false, smsNotifications: false };

  @ViewChild(ProfileTypeComponent) profileTypeComponent!: ProfileTypeComponent;
  @ViewChild(InformationsComponent) informationsComponent!: InformationsComponent;
  @ViewChild(ContactComponent) contactComponent!: ContactComponent;
  @ViewChild(DisponibilitesComponent) disponibilitesComponent!: DisponibilitesComponent;
  @ViewChild(DescriptionComponent) descriptionComponent!: DescriptionComponent;
  @ViewChild(FormationComponent) formationComponent!: FormationComponent;
  @ViewChild(ExperiencesComponent) experiencesComponent!: ExperiencesComponent;
  @ViewChild(CvComponent) cvComponent!: CvComponent;
  @ViewChild(PreferenceComponent) preferenceComponent!: PreferenceComponent;
  @ViewChild(NotificationsComponent) notificationsComponent!: NotificationsComponent;


  goToNextStep() {
    switch (this.step) {
      case 1:
        if (this.step === 1 && !this.userType) {
          return;
        }
        this.profileTypeComponent.onTypeUpdate();
        break;
      case 2:
        this.informationsComponent.onInfoUpdate();
        break;
      case 3:
        this.contactComponent.onContactUpdate();
        break;
      case 4:
        this.disponibilitesComponent.onDisponibiliteUpdate();
        break;
      case 5:
        this.descriptionComponent.onDescriptionUpdate();
        break;
      case 6:
        this.formationComponent.onFormationUpdate();
        break;
      case 7:
        this.experiencesComponent.onExperienceUpdate();
        break;
      case 8:
        this.cvComponent.onCvUpdate();
        break;
      case 9:
        this.preferenceComponent.onPreferenceUpdate();
        break;
      case 10:
        this.notificationsComponent.onNotificationUpdate();
        break;
    }
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
      contactInfo: this.contactInfo,
      availability: this.availability,
      references: this.references,
      formation: this.formation,
      experience: this.experience,
      languages: this.languages,
      preferences: this.preferences,
      notifications: this.notifications
    });
  }

  skip() {
    // Logique pour abandonner
  }
}
