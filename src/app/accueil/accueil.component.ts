// src/app/accueil/accueil.component.ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { OffersComponentsModule } from '../../offers-components.module';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, OffersComponentsModule],
  
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  
})
export class AccueilComponent { }
