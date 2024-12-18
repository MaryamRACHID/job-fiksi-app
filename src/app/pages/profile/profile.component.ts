import {Component, Output, EventEmitter, ViewChild, Input, ChangeDetectorRef} from '@angular/core';
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
import {UserService} from '../../services/user.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Output() userTypeSelected = new EventEmitter<string>();

  step: number = 1;
  userType: string | null = null;
  personalInfo = { gender: '', name: '', firstName: '', birthDate: '', city: '', nationality: '', id: 9, imageUrl: ''};
  contactInfo = { phone: '', rue: '', postalCode: '', city: '' };
  preferencesInfo = {
    jobPreferences: {
      server: false,
      cook: false,
      dishwasher: false,
      other: false,
      otherType: ''
    },
    locationPreference: '',
    accessibleByTransport: false,
    kmPreference: {
      max: 0
    },
    salaryPreference: {
      min: 1000,
      max: 2000
    }
  };
  restauInfo = { name: '', type: '', code_postal: '', tel_pro: '' , email_pro: '' , site_web: ''};
  disponibilitesInfo = { phone: '', rue: '', postalCode: '', city: '' };
  notificationsInfo = { phone: '', rue: '', postalCode: '', city: '' };
  descriptionInfo = { phone: '', rue: '', postalCode: '', city: '' };
  formationInfo = { phone: '', rue: '', postalCode: '', city: '' };
  experiencesInfo = { phone: '', rue: '', postalCode: '', city: '' };
  cvInfo = { phone: '', rue: '', postalCode: '', city: '' };
  identityInfo = { phone: '', rue: '', postalCode: '', city: '' };
  bankInfo = { phone: '', rue: '', postalCode: '', city: '' };
  availability: string[] = [];
  references = { hasExperience: false, description: '', skills: '' };
  formation = { level: '', diplomas: [] };
  experience = [];
  languages: string[] = [];
  preferences: any = { preferredJobTypes: [], locations: [] };
  notifications: any = { emailNotifications: false, smsNotifications: false };
  isFormValid: boolean = false;

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

  token: string | null = null;
  userId: string | null = null;

  constructor(private router: Router, private userService: UserService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    const savedContactInfo = localStorage.getItem('contactInfo');
    if (savedContactInfo) {
      this.contactInfo = JSON.parse(savedContactInfo);
    }
      this.userType = localStorage.getItem("userType")
  }


  handleInfoChange(isValid: boolean): void {
    this.isFormValid = isValid;
    console.log('Formulaire valide:', this.isFormValid);
    console.log("first", this.isFormValid)
    this.cdRef.detectChanges();
  }

  goToNextStep() {
    switch (this.step) {
      case 1:
        this.informationsComponent.saveInfo();
        this.step++;
        break;
      case 2:
        this.contactComponent.saveContact();
        this.step++;
        break;
      case 3:
        if (this.userType == 'candidat'){
          this.preferenceComponent.savePreference();
          this.step++;
        } else {
          console.log("first", this.isFormValid)
          this.infoRestaurantComponent.onSubmit();
          console.log("last", this.isFormValid)
          if (this.isFormValid){
            this.step++;
          }
        }
        break;
      case 4:
        if (this.userType == 'candidat'){
          this.disponibilitesComponent.saveDisponibilite();
        } else {
          this.router.navigate(['/accueil']);
          this.notificationsComponent.saveNotifications();
          return;
        }
        this.step++;
        break;
      case 5:
        this.descriptionComponent.saveDescription();
        this.step++;
        break;
      case 6:
        this.formationComponent.saveFormation();
        this.step++;
        break;
      case 7:
        this.experiencesComponent.saveExperience();
        this.step++;
        break;
      case 8:
        this.cvComponent.saveCV();
        this.step++;
        break;
      case 9:
        this.identityComponent.saveIdentity();
        this.step++;
        break;
      case 10:
        this.bankComponent.saveBank();
        this.step++;
        break;
      case 11:
        this.notificationsComponent.saveNotifications();
        this.router.navigate(['/accueil']);
        this.step++;
        return;
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
      this.router.navigate(['/accueil']);
  }


}
