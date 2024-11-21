import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent} from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { JobListComponent } from '../offers-components/job-list/job-list.component';
import { JobDetailsComponent } from '../offers-components/job-details/job-details.component';

=======
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {ProfileComponentsModule} from '../profile-components/profile-components.module';
>>>>>>> 166d589d120ad970d479fd813bbb51f86d9c5763

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    JobDetailsComponent,    
  ],
  exports: [
    LoginComponent,
<<<<<<< HEAD
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    JobDetailsComponent,


=======
    HomeComponent,
    ProfileComponent
>>>>>>> 166d589d120ad970d479fd813bbb51f86d9c5763
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
<<<<<<< HEAD
  
=======
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    ProfileComponentsModule
>>>>>>> 166d589d120ad970d479fd813bbb51f86d9c5763
  ]
})
export class PagesModule { }
