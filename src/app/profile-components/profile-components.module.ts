import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { DescriptionComponent } from './description/description.component';
import { InformationsComponent } from './informations/informations.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { SecuriteComponent } from './securite/securite.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CvComponent,
    DescriptionComponent,
    InformationsComponent,
    NotificationsComponent,
    PreferencesComponent,
    SecuriteComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ]
})
export class ProfileComponentsModule { }
