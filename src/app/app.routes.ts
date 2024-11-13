import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { JobDetailsComponent } from './offers-components/job-details/job-details.component'; // Importez le composant de détails
import { JobListComponent } from './offers-components/job-list/job-list.component';

export const routes: Routes = [
  { path: 'home', component: AccueilComponent },
  {path: 'annonces', component: JobListComponent}, // Route pour la liste des offres
  { path: 'annonces/:id', component: JobDetailsComponent }, // Route pour les détails de l'offre
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: 'home' } // Redirection pour les routes non trouvées
];
