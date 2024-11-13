// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { InformationsComponent } from './profile-components/informations/informations.component';
import { ContactComponent } from './profile-components/contact/contact.component';
import { CvComponent } from './profile-components/cv/cv.component';
import {PreferenceComponent} from './profile-components/preference/preference.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {SecuriteComponent} from './pages/securite/securite.component';
import {DocumentListComponent} from './pages/document-list/document-list.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Page d'accueil par défaut
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfileComponent },
  { path: 'info', component: InformationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cv', component: CvComponent },
  { path: 'job', component: PreferenceComponent },
  { path: 'accueil', component: AccueilComponent },

  { path: '**', redirectTo: '' }, // Redirection vers l'accueil pour les routes inconnues
  { path: 'settings', component: SettingsComponent },
  { path: 'password', component: SecuriteComponent },
  { path: 'documents', component: DocumentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
