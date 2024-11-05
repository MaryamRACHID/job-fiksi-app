// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';

export const routes: Routes = [
  { path: 'home', component: AccueilComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: 'home' } // Redirection pour les routes non trouvées
];
