import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { PlanningComponent } from './profile-restaurant/planning/planning.component';
import { OffreDescriptionComponent } from "./profile-restaurant/offre-description/offre-description.component";
import { ProfileRestaurantComponent } from './profile-restaurant/profile-restaurant.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
// import { ModifierInfosRestaurantComponent } from './profile-restaurant/modifier-infos-restaurant/modifier-infos-restaurant.component';
@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProfileRestaurantComponent,
    CandidatDescriptionComponent,
    OffreDescriptionComponent,
    PlanningComponent,
    SettingsComponent,
    ModifierInfosRestaurantComponent,
    RestaurantInfosComponent,
    ProfileCandidatComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileRestaurantComponent,
    SettingsComponent,
    CandidatDescriptionComponent,
    ModifierInfosRestaurantComponent,
    ProfileCandidatComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatRadioModule
],
providers: [
  MatNativeDateModule, // Provide the native date adapter
]
})
export class PagesModule { }

import { CandidatDescriptionComponent } from './profile-restaurant/candidat-description/candidat-description.component';
import { InputModalityDetector } from '@angular/cdk/a11y';
import { SettingsComponent } from './settings/settings.component';
import { ModifierInfosRestaurantComponent } from './profile-restaurant/modifier-infos-restaurant/modifier-infos-restaurant.component';
import { RestaurantInfosComponent } from './profile-restaurant/restaurant-infos/restaurant-infos.component';
import { ProfileCandidatComponent } from './profile-candidat/profile-candidat.component';

