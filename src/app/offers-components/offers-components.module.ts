import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import {NgxSliderModule} from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
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
