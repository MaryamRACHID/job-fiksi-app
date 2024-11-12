// src/app/pages/pages.module.ts
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilRestaurantComponent } from './accueil-restau/accueil-restau.component';
import { OffersComponentsModule } from '../offers-components/offers-components.module';
import { FilterComponent } from '../offers-components/filter/filter.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponentsModule } from '../profile-components/profile-components.module';
import { MaterialModule } from '../material.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    AccueilComponent,
    AccueilRestaurantComponent,
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    AccueilComponent,
    AccueilRestaurantComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ProfileComponentsModule,
    MaterialModule,
    OffersComponentsModule
  ]
})
export class PagesModule {}
