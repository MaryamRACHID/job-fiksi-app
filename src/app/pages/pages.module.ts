import { NgModule,CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilRestaurantComponent } from './accueil-restau/accueil-restau.component';
import { OffersComponentsModule } from '../offers-components/offers-components.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {ProfileComponentsModule} from '../profile-components/profile-components.module';
import {SettingsComponent} from './settings/settings.component';
import {SecuriteComponent} from './securite/securite.component';
import {DocumentListComponent} from './document-list/document-list.component';
import {MessagerieModule} from '../messagerie/messagerie.module';
// import { ButtonContactCandidatComponent } from './profile-candidat/button-contact-candidat/button-contact-candidat.component';
import { ProfileRestaurantComponent } from './profile-restaurant/profile-restaurant.component';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { RestaurantInfosComponent } from './profile-restaurant/restaurant-infos/restaurant-infos.component';
import { OffreDescriptionComponent } from './profile-restaurant/offre-description/offre-description.component';
import { CandidatDescriptionComponent } from './profile-restaurant/candidat-description/candidat-description.component';


import { ProfileCandidatComponent } from './profile-candidat/profile-candidat.component';
import { ProfileCandidatVuRecruteurComponent } from './profile-candidat/profile-candidat-vu-recruteur/profile-candidat-vu-recruteur.component';
import { ModifierProfileCandidatComponent } from './profile-candidat/modifier-profile-candidat/modifier-profile-candidat.component';
// import { ButtonContactCandidatComponent } from './profile-candidat/button-contact-candidat/button-contact-candidat.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PlanningComponent } from './profile-restaurant/planning/planning.component';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import {FirstPageComponent} from './first-page/first-page.component';
import {SplashScreenComponent} from './splash-screen/splash-screen.component';
import { RechercheCandidatComponent } from './recherche-candidat/recherche-candidat.component';
import { RechercheDesCandidatsComponent } from './recherche-des-candidats/recherche-des-candidats.component';
import { EmploisPertinentsComponent } from './recherche-des-candidats/emplois-pertinents/emplois-pertinents.component';
import { FilterForCandidatComponent } from './recherche-des-candidats/filter-for-candidat/filter-for-candidat.component';
import { DetailsComponent } from './recherche-des-candidats/details/details.component';
import { PostulerComponent } from './recherche-des-candidats/postuler/postuler.component';
import { MesFavoriesComponent } from './recherche-des-candidats/mes-favories/mes-favories.component';
import { MesCandidaturesComponent } from './recherche-des-candidats/mes-candidatures/mes-candidatures.component';
import { ModifierInfosRestaurantComponent } from './profile-restaurant/modifier-infos-restaurant/modifier-infos-restaurant.component';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { ContratComponent } from './profile-restaurant/contrat/contrat.component';
import { GenereContratComponent } from './profile-restaurant/genere-contrat/genere-contrat.component';
import { FeedbackCandidatComponent } from './profile-restaurant/feedback-candidat/feedback-candidat.component';
import { MesFavoriesCandidatsComponent } from './profile-restaurant/mes-favories-candidats/mes-favories-candidats.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    FirstPageComponent,
    SplashScreenComponent,
    LoginComponent,
    ProfileComponent,
    AccueilComponent,
    SettingsComponent,
    SecuriteComponent,
    DocumentListComponent,
    AccueilRestaurantComponent,
    AccueilRestaurantComponent,
    RechercheCandidatComponent,
    ProfileCandidatVuRecruteurComponent,
    ModifierProfileCandidatComponent,
    ProfileRestaurantComponent,
    RestaurantInfosComponent,
    OffreDescriptionComponent,
    CandidatDescriptionComponent,
    PlanningComponent,
    ModifierInfosRestaurantComponent,
    ProfileCandidatComponent,
    ProfileCandidatVuRecruteurComponent,
    ModifierProfileCandidatComponent,
    AccueilRestaurantComponent,
    RechercheCandidatComponent,
    RechercheDesCandidatsComponent,
    EmploisPertinentsComponent,
    FilterForCandidatComponent,
    DetailsComponent,
    PostulerComponent,
    MesFavoriesComponent,
    MesCandidaturesComponent,
    MenuBarComponent,
    ContratComponent,
    GenereContratComponent,
    FeedbackCandidatComponent,
    MesFavoriesCandidatsComponent
  ],
  exports: [
    FirstPageComponent,
    SplashScreenComponent,
    LoginComponent,
    ProfileComponent,
    AccueilComponent,
    SettingsComponent,
    SettingsComponent,
    SecuriteComponent,
    DocumentListComponent,
    ProfileCandidatComponent,
    ProfileCandidatVuRecruteurComponent,
    ProfileRestaurantComponent,
    RestaurantInfosComponent,
    OffreDescriptionComponent,
    CandidatDescriptionComponent,
    PlanningComponent,
    ModifierInfosRestaurantComponent,
    ProfileCandidatComponent,
    ProfileCandidatVuRecruteurComponent,
    ModifierProfileCandidatComponent,
    RechercheCandidatComponent,
    AccueilRestaurantComponent,
    RechercheDesCandidatsComponent,
    EmploisPertinentsComponent,
    FilterForCandidatComponent,
    DetailsComponent,
    PostulerComponent,
    MesFavoriesComponent,
    MesCandidaturesComponent,
    MenuBarComponent,
    ContratComponent,
    GenereContratComponent,
    FeedbackCandidatComponent,
    MesFavoriesCandidatsComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ProfileComponentsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    ProfileComponentsModule,
    ReactiveFormsModule,
    OffersComponentsModule,
    MessagerieModule,
    MatTabsModule,
    MatRadioModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule
  ],
  providers: [
    MatDatepickerModule, // Nécessaire pour fournir le service du datepicker
    MatNativeDateModule
  ],


})
export class PagesModule {}
