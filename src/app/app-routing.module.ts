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
import {FirstPageComponent} from './pages/first-page/first-page.component';
import {SplashScreenComponent} from './pages/splash-screen/splash-screen.component';
import {BaseInformationComponent} from './offers-components/base-information/base-information.component';
import {JobInformationComponent} from './offers-components/job-information/job-information.component';
import {PrerequisitesComponent} from './offers-components/prerequisites/prerequisites.component';
import {ChooseSlotComponent} from './offers-components/choose-slot/choose-slot.component';
import {JobAvantagesComponent} from './offers-components/job-avantages/job-avantages.component';
import {InterviewSlotsComponent} from './offers-components/interview-slots/interview-slots.component';
import {JobPageComponent} from './offers-components/job-page/job-page.component';
import {SucceedPageComponent} from './offers-components/succeed-page/succeed-page.component';
import {MessagesListComponent} from './messagerie/messages-list/messages-list.component';
import {ChatComponent} from './messagerie/chat/chat.component';
import {NoMessagesComponent} from './messagerie/no-messages/no-messages.component';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'splash-screen', component: SplashScreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'info', component: InformationsComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'cv', component: CvComponent },
  { path: 'job', component: PreferenceComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'accueilRestau', component: AccueilRestaurantComponent },
  { path: 'settings', component: SettingsComponent, data: { title: 'Paramètres' }},
  { path: 'password', component: SecuriteComponent },
  { path: 'documents', component: DocumentListComponent },
  { path: 'addPost/base', component: BaseInformationComponent, data: { title: 'Ajouter un poste' }},
  { path: 'addPost/jobInformation', component: JobInformationComponent, data: { title: 'Ajouter un poste' }},
  { path: 'addPost/prerequisites', component: PrerequisitesComponent, data: { title: 'Ajouter un poste' }},
  { path: 'addPost/interviewSlots', component: InterviewSlotsComponent, data: { title: 'Ajouter un poste' }},
  { path: 'addPost/chooseSlot', component: ChooseSlotComponent, data: { title: 'Ajouter un poste' }},
  { path: 'addPost/jobAvantages', component: JobAvantagesComponent, data: { title: 'Ajouter un poste' }},
  { path: 'addPost/jobPage', component: JobPageComponent, data: { title: 'Ajouter un poste' }},
  { path: 'addPost/succeed', component: SucceedPageComponent, data: { title: 'Ajouter un poste' }},

  { path: 'messagerie', component: MessagesListComponent, data: { title: 'Messagerie' }},
  { path: 'conversation', component: ChatComponent },
  { path: 'ajout/message', component: NoMessagesComponent },


  { path: '**', redirectTo: '' }, // Redirection vers l'accueil pour les routes inconnues

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
