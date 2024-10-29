import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { DescriptionComponent } from './description/description.component';
import { InformationsComponent } from './informations/informations.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DisponibilitesComponent } from './disponibilites/disponibilites.component';
import { SecuriteComponent } from './securite/securite.component';
import { PreferenceComponent } from './preference/preference.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProfileTypeComponent } from './profile-type/profile-type.component';
import { ContactComponent } from './contact/contact.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormationComponent } from './formation/formation.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatOptionModule} from '@angular/material/core';
import {MatListModule, MatSelectionList} from '@angular/material/list';

@NgModule({
  declarations: [
    CvComponent,
    DescriptionComponent,
    InformationsComponent,
    NotificationsComponent,
    DisponibilitesComponent,
    SecuriteComponent,
    ProfileTypeComponent,
    ContactComponent,
    ExperiencesComponent,
    FormationComponent,
    PreferenceComponent
  ],
  exports: [
    ProfileTypeComponent,
    InformationsComponent,
    DescriptionComponent,
    DisponibilitesComponent,
    SecuriteComponent,
    NotificationsComponent,
    ContactComponent,
    ExperiencesComponent,
    FormationComponent,
    PreferenceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
    MatOptionModule,
    MatListModule
  ]
})
export class ProfileComponentsModule { }
