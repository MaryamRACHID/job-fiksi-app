import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent} from './pages/profile/profile.component';
import { InformationsComponent } from './profile-components/informations/informations.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'profil', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'info', component: InformationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
