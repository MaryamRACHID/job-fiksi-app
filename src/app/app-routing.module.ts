import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileRestaurantComponent } from './pages/profile-restaurant/profile-restaurant.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PlanningComponent } from './pages/profile-restaurant/planning/planning.component';
import { ModifierInfosRestaurantComponent } from './pages/profile-restaurant/modifier-infos-restaurant/modifier-infos-restaurant.component';
import { RestaurantInfosComponent } from './pages/profile-restaurant/restaurant-infos/restaurant-infos.component';
import { ProfileCandidatComponent } from './pages/profile-candidat/profile-candidat.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile-restaurant', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'profile-restaurant', component: ProfileRestaurantComponent},
  {path:'settings', component:SettingsComponent},
  {path:'planning', component:PlanningComponent},
  {path:'modifier-infos-restaurant', component:ModifierInfosRestaurantComponent},
  {path:'restaurant-infos', component:RestaurantInfosComponent},
  {path:'profile-candidat', component:ProfileCandidatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
