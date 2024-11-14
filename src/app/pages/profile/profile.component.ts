import {Component, Output, EventEmitter, ViewChild, Input} from '@angular/core';
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
import {IdentityComponent} from '../../profile-components/identity/identity.component';
import {BankComponent} from '../../profile-components/bank/bank.component';
import {InfoRestaurantComponent} from '../../profile-components/info-restaurant/info-restaurant.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Output() userTypeSelected = new EventEmitter<string>();

  step: number = 1;
  userType: string | null = null;
  personalInfo = { name: '', firstName: '', birthDate: '', city: '', nationality: '' };
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
  @ViewChild(PreferenceComponent) preferenceComponent!: PreferenceComponent;
  @ViewChild(InfoRestaurantComponent) infoRestaurantComponent!: InfoRestaurantComponent;
  @ViewChild(DisponibilitesComponent) disponibilitesComponent!: DisponibilitesComponent;
  @ViewChild(DescriptionComponent) descriptionComponent!: DescriptionComponent;
  @ViewChild(FormationComponent) formationComponent!: FormationComponent;
  @ViewChild(ExperiencesComponent) experiencesComponent!: ExperiencesComponent;
  @ViewChild(CvComponent) cvComponent!: CvComponent;
  @ViewChild(IdentityComponent) identityComponent!: IdentityComponent;
  @ViewChild(BankComponent) bankComponent!: BankComponent;
  @ViewChild(NotificationsComponent) notificationsComponent!: NotificationsComponent;
  
  constructor(private router: Router) {}



  goToNextStep() {
    switch (this.step) {
      case 1:
        if (this.step === 1 && !this.userType) {
          return;
        }
        this.profileTypeComponent.saveType();
        break;
      case 2:
        this.informationsComponent.saveInfo();
        break;
      case 3:
        this.contactComponent.saveContact();
        break;
      case 4:
        if (this.userType == 'candidate'){
          this.preferenceComponent.savePreference();
        } else {
          this.infoRestaurantComponent.saveRestaurantInfo();
        }
        break;
      case 5:
        if (this.userType == 'candidate'){
          this.disponibilitesComponent.saveDisponibilite();
        } else {
          this.router.navigate(['/accueil']);
          this.notificationsComponent.saveNotifications();
          return;
        }
        break;
      case 6:
        this.descriptionComponent.saveDescription();
        break;
      case 7:
        this.formationComponent.saveFormation();
        break;
      case 8:
        this.experiencesComponent.saveExperience();
        break;
      case 9:
        this.cvComponent.saveCV();
        break;
      case 10:
        this.identityComponent.saveIdentity();
        break;
      case 11:
        this.bankComponent.saveBank();
        break;
      case 12:
        this.notificationsComponent.saveNotifications();
        this.router.navigate(['/accueil']);
        return;
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
    this.router.navigate(['/accueil']);

  }
}
