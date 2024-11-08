import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { DescriptionComponent } from './description/description.component';
import { InformationsComponent } from './informations/informations.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DisponibilitesComponent } from './disponibilites/disponibilites.component';
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
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import {IdentityComponent} from './identity/identity.component';
import {BankComponent} from './bank/bank.component';
import {InfoRestaurantComponent} from './info-restaurant/info-restaurant.component';

@NgModule({
  declarations: [
    ProfileTypeComponent,
    InformationsComponent,
    ContactComponent,
    PreferenceComponent,
    DisponibilitesComponent,
    DescriptionComponent,
    FormationComponent,
    ExperiencesComponent,
    CvComponent,
    IdentityComponent,
    BankComponent,
    NotificationsComponent,
    InfoRestaurantComponent,
  ],
  exports: [
    ProfileTypeComponent,
    InformationsComponent,
    ContactComponent,
    PreferenceComponent,
    DisponibilitesComponent,
    DescriptionComponent,
    FormationComponent,
    ExperiencesComponent,
    CvComponent,
    IdentityComponent,
    BankComponent,
    NotificationsComponent,
    InfoRestaurantComponent,
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
    MatListModule,
    NgxSliderModule
  ]
})
export class ProfileComponentsModule { }
