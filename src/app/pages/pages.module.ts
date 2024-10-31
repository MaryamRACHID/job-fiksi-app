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
import { ProfileRestaurantComponent } from './profile-restaurant/profile-restaurant.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { OffreDescriptionComponent } from "./profile-restaurant/offre-description/offre-description.component";


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProfileRestaurantComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileRestaurantComponent
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
    OffreDescriptionComponent
]
})
export class PagesModule { }
