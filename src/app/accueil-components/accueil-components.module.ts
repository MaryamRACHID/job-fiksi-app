import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {FilterComponent} from './filter/filter.component';
import {BodyComponent} from './body/body.component';
import {AccueilHeaderComponent} from './accueil-header/accueil-header.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AccueilHeaderComponent,
    SideMenuComponent,
    FilterComponent,
    BodyComponent
  ],
  exports: [
    AccueilHeaderComponent,
    SideMenuComponent,
    FilterComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    NgxSliderModule,
    FormsModule
  ]
})
export class AccueilComponentsModule { }
