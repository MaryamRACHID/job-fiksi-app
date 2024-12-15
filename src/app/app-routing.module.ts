import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ProfileRestaurantComponent } from './pages/profile-restaurant/profile-restaurant.component';
import { ProfileCandidatComponent } from './pages/profile-candidat/profile-candidat.component';
import { ProfileCandidatVuRecruteurComponent } from './pages/profile-candidat/profile-candidat-vu-recruteur/profile-candidat-vu-recruteur.component';
import { ModifierProfileCandidatComponent } from './pages/profile-candidat/modifier-profile-candidat/modifier-profile-candidat.component';
import {SplashScreenComponent} from './pages/splash-screen/splash-screen.component';
import {FirstPageComponent} from './pages/first-page/first-page.component';
import { HeaderRechercheComponent } from './offers-components/header-recherche/header-recherche.component';
import { RechercheCandidatComponent } from './pages/recherche-candidat/recherche-candidat.component';
import {AccueilComponent} from './pages/accueil/accueil.component';
import {RechercheDesCandidatsComponent} from './pages/recherche-des-candidats/recherche-des-candidats.component';
import {DetailsComponent} from './pages/recherche-des-candidats/details/details.component';
import {PostulerComponent} from './pages/recherche-des-candidats/postuler/postuler.component';
import {MesFavoriesComponent} from './pages/recherche-des-candidats/mes-favories/mes-favories.component';
import {MesCandidaturesComponent} from './pages/recherche-des-candidats/mes-candidatures/mes-candidatures.component';
import {GenereContratComponent} from './pages/profile-restaurant/genere-contrat/genere-contrat.component';
import {FeedbackCandidatComponent} from './pages/profile-restaurant/feedback-candidat/feedback-candidat.component';
import { MesFavoriesCandidatsComponent } from './pages/profile-restaurant/mes-favories-candidats/mes-favories-candidats.component';
import {FilterComponent} from './accueil-components/filter/filter.component';

export const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'splash-screen', component: SplashScreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfileComponent, canActivate: [AuthGuard]},
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
  { path: 'header-recherche', component: HeaderRechercheComponent},
  { path: 'rechercheCandidat', component: RechercheCandidatComponent},
  {path:'profile-restaurant', component:ProfileRestaurantComponent},
  {path:'modifier-infos-restaurant', component: InformationsComponent},
  {path:'profile-candidat', component: ProfileCandidatComponent},
  {path:'profileCandidatVuParResto',component: ProfileCandidatVuRecruteurComponent, data: { title: 'profil de candidat' }},
  {path:'modifier-profil-candidat', component: ModifierProfileCandidatComponent},
  { path: 'header-recherche', component: HeaderRechercheComponent},
  { path: 'rechercheCandidat', component: RechercheCandidatComponent},
  {path:'rechercheDesCandidats', component: RechercheDesCandidatsComponent},
  {path:'details', component: DetailsComponent, data: { title: 'Détails' }},
  {path:'postuler', component: PostulerComponent, data: { title: 'Postuler' }},
  {path:'mesFavoriesOffre', component:MesFavoriesComponent },
  {path:'mesFavorisCandidats',component:MesFavoriesCandidatsComponent},
  {path:'mesCandidatures', component: MesCandidaturesComponent},
  {path:'genereContrat',component: GenereContratComponent},
  {path:'feedbackCandidat',component:FeedbackCandidatComponent},
  {path:'filter',component:FilterComponent},
  { path: '**', redirectTo: '' }, // Redirection vers l'accueil pour les routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
