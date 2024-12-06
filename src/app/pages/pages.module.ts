// src/app/pages/pages.module.ts
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilRestaurantComponent } from './accueil-restau/accueil-restau.component';
import { OffersComponentsModule } from '../offers-components/offers-components.module';
import { FilterComponent } from '../offers-components/filter/filter.component';
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
import { ProfileRestaurantComponent } from './profile-restaurant/profile-restaurant.component';

import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { RestaurantInfosComponent } from './profile-restaurant/restaurant-infos/restaurant-infos.component';
import { OffreDescriptionComponent } from './profile-restaurant/offre-description/offre-description.component';
import { CandidatDescriptionComponent } from './profile-restaurant/candidat-description/candidat-description.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PlanningComponent } from './profile-restaurant/planning/planning.component';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { ModifierInfosRestaurantComponent } from './profile-restaurant/modifier-infos-restaurant/modifier-infos-restaurant.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    LoginComponent,
    ProfileComponent,
    AccueilComponent,
    SettingsComponent,
    SecuriteComponent,
    DocumentListComponent,
    AccueilRestaurantComponent,
    ProfileRestaurantComponent,
    RestaurantInfosComponent,
    OffreDescriptionComponent,
    CandidatDescriptionComponent,
    PlanningComponent,
    ModifierInfosRestaurantComponent,
    MenuBarComponent
  ],
  exports: [
    LoginComponent,
    ProfileComponent,
    AccueilComponent,
    SettingsComponent,
    SettingsComponent,
    SecuriteComponent,
    DocumentListComponent,
    AccueilRestaurantComponent,

    ProfileRestaurantComponent,
    RestaurantInfosComponent,
    OffreDescriptionComponent,
    CandidatDescriptionComponent,
    PlanningComponent,
    ModifierInfosRestaurantComponent,
    MenuBarComponent
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
    MatTabsModule,
    MatRadioModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule, // Nécessaire pour fournir le service du datepicker
  ],
})
export class PagesModule {}
