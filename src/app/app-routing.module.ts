// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { InformationsComponent } from './profile-components/informations/informations.component';
import { ContactComponent } from './profile-components/contact/contact.component';
import { CvComponent } from './profile-components/cv/cv.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {SecuriteComponent} from './pages/securite/securite.component';
import {DocumentListComponent} from './pages/document-list/document-list.component';
import { PreferenceComponent } from './profile-components/preference/preference.component';
import { AccueilRestaurantComponent } from './pages/accueil-restau/accueil-restau.component';
import { ProfileCandidatComponent } from './pages/profile-candidat/profile-candidat.component';
import { ProfileCandidatVuRecruteurComponent } from './pages/profile-candidat/profile-candidat-vu-recruteur/profile-candidat-vu-recruteur.component';
import { ModifierProfileCandidatComponent } from './pages/profile-candidat/modifier-profile-candidat/modifier-profile-candidat.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Page d'accueil par défaut
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfileComponent },
  { path: 'info', component: InformationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cv', component: CvComponent },
  { path: 'job', component: PreferenceComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'accueilRestau', component: AccueilRestaurantComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'password', component: SecuriteComponent },
  { path: 'documents', component: DocumentListComponent },
  {path:'profile-candidat', component:ProfileCandidatComponent},
  {path:'profile-candidat-vu-recruteur', component:ProfileCandidatVuRecruteurComponent},
  {path:'modifier-profile-candidat', component:ModifierProfileCandidatComponent},
  { path: '**', redirectTo: '' }, // Redirection vers l'accueil pour les routes inconnues

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
