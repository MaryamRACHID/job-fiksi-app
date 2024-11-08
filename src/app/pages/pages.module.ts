// src/app/pages/pages.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AccueilComponent } from './accueil/accueil.component';

import { SharedModule } from '../shared/shared.module';
import { ProfileComponentsModule } from '../profile-components/profile-components.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    AccueilComponent
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    AccueilComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ProfileComponentsModule,
    MaterialModule
  ]
})
export class PagesModule {}
