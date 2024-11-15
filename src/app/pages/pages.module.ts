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
import { ProfileCandidatComponent } from './profile-candidat/profile-candidat.component';
import { ProfileCandidatVuRecruteurComponent } from './profile-candidat/profile-candidat-vu-recruteur/profile-candidat-vu-recruteur.component';
import { ModifierProfileCandidatComponent } from './profile-candidat/modifier-profile-candidat/modifier-profile-candidat.component';
import { ProfileRestaurantComponent } from './profile-restaurant/profile-restaurant.component';

import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
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
    ProfileCandidatComponent,
    ProfileCandidatVuRecruteurComponent,
    ModifierProfileCandidatComponent,

    ProfileRestaurantComponent
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
    ProfileCandidatComponent,
    ProfileCandidatVuRecruteurComponent,
    ModifierProfileCandidatComponent,

    ProfileRestaurantComponent
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
    MatDialogModule
  ]
})
export class PagesModule {}
