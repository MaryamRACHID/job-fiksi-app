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
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Output() userTypeSelected = new EventEmitter<string>();

  step: number = 1;
  userType: string | null = null;
  personalInfo = { gender: '', name: '', firstName: '', birthDate: '', city: '', nationality: '', id: 9};
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
  restauInfo = { name: '', type: '', code_postal: '', tel_pro: '' , email_pro: '' , site_web: '' };
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

  constructor(private router: Router, private userService: UserService) {}


  /*ngOnInit(): void {
    // Récupérer le token et userId depuis localStorage
    this.token = localStorage.getItem('token');
    this.userId = localStorage.getItem('userId');

    // Vérifiez si le token existe, sinon redirigez l'utilisateur
    if (!this.token) {
      // L'utilisateur n'est pas authentifié, rediriger vers la page de connexion
      this.router.navigate(['/login']);
    } else {
      console.log('Token récupéré :', this.token);
      console.log('User ID récupéré :', this.userId);

      // Vous pouvez maintenant utiliser le token pour effectuer des requêtes API
      this.userService.getUserProfile(Number(this.userId))  // Exemple d'utilisation de l'ID utilisateur
        .then((profile) => {
          this.userType = profile.user_type;
          console.log('Profil utilisateur :', profile);
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération du profil :', error);
        });
    }
  }*/


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
        if (this.userType == 'candidat'){
          this.preferenceComponent.savePreference();
        } else {
          this.infoRestaurantComponent.saveRestaurantInfo();
        }
        break;
      case 5:
        if (this.userType == 'candidat'){
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
    if(this.userType === "candidat"){
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/accueil']);
    }
  }
}
