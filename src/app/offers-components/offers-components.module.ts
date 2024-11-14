import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import { HeaderRechercheComponent } from './header-recherche/header-recherche.component';

@NgModule({
  declarations: [
    FilterComponent,
    HeaderRechercheComponent
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
