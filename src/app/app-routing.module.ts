import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { JobDetailsComponent } from './offers-components/job-details/job-details.component';

const routes: Routes = [
 
  { path: 'home', component: HomeComponent },
    
  { path: 'annonces/:id', component: JobDetailsComponent },
=======
import { ProfileComponent} from './pages/profile/profile.component';
import { InformationsComponent } from './profile-components/informations/informations.component';
import { ContactComponent } from './profile-components/contact/contact.component';
import {CvComponent} from './profile-components/cv/cv.component';
import {PreferenceComponent} from './profile-components/preference/preference.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'profil', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'info', component: InformationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cv', component: CvComponent },
  { path: 'job', component: PreferenceComponent },
>>>>>>> 166d589d120ad970d479fd813bbb51f86d9c5763
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
