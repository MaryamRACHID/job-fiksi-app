import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import {BaseInformationComponent} from './base-information/base-information.component';
import {JobInformationComponent} from './job-information/job-information.component';
import {PrerequisitesComponent} from './prerequisites/prerequisites.component';
import {InterviewSlotsComponent} from './interview-slots/interview-slots.component';
import {FilterComponent} from './filter/filter.component';
import {JobListComponent} from './job-list/job-list.component';
import {JobDetailsComponent} from './job-details/job-details.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {ChooseSlotComponent} from './choose-slot/choose-slot.component';
import {JobAvantagesComponent} from './job-avantages/job-avantages.component';
import {JobPageComponent} from './job-page/job-page.component';
import {SucceedPageComponent} from './succeed-page/succeed-page.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { HeaderRechercheComponent } from './header-recherche/header-recherche.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  declarations: [
    BaseInformationComponent,
    JobInformationComponent,
    PrerequisitesComponent,
    InterviewSlotsComponent,
    ChooseSlotComponent,
    JobAvantagesComponent,
    SucceedPageComponent,
    JobPageComponent,
    FilterComponent,
    JobListComponent,
    JobDetailsComponent,
    SearchBarComponent,
    HeaderRechercheComponent
  ],
  exports: [
    BaseInformationComponent,
    JobInformationComponent,
    PrerequisitesComponent,
    InterviewSlotsComponent,
    ChooseSlotComponent,
    JobAvantagesComponent,
    JobPageComponent,
    SucceedPageComponent,
    FilterComponent,
    HeaderRechercheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    NgxSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxSliderModule,
    NgxMaterialTimepickerModule,
    MatChipsModule
  ]
})
export class OffersComponentsModule { }
