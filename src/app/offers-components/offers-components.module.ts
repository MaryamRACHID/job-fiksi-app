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

@NgModule({
  declarations: [
    BaseInformationComponent,
    JobInformationComponent,
    PrerequisitesComponent,
    InterviewSlotsComponent,
    FilterComponent,
    JobListComponent,
    JobDetailsComponent,
    SearchBarComponent,
  ],
  exports: [
    BaseInformationComponent,
    JobInformationComponent,
    PrerequisitesComponent,
    InterviewSlotsComponent,
    FilterComponent,
    JobListComponent,
    JobDetailsComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    NgxSliderModule
  ]
})
export class OffersComponentsModule { }
