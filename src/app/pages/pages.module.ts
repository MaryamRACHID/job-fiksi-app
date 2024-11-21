import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
import { HomeComponent } from './home/home.component';
import { JobListComponent } from '../offers-components/job-list/job-list.component';
import { JobDetailsComponent } from '../offers-components/job-details/job-details.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    JobDetailsComponent,    
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    JobDetailsComponent,


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
  
  ]
})
export class PagesModule { }
