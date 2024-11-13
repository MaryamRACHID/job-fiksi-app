import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './app/offers-components/filter/filter.component';
import { JobListComponent } from './app/offers-components/job-list/job-list.component';
import { JobDetailsComponent } from './app/offers-components/job-details/job-details.component';
import { SearchBarComponent } from './app/offers-components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './app/shared/shared.module';
import { RouterModule } from '@angular/router';

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
    RouterModule
  ],
  exports: [
    FilterComponent,
    JobListComponent,
    JobDetailsComponent,
    SearchBarComponent,
    RouterModule
  ]
})
export class OffersComponentsModule { }
