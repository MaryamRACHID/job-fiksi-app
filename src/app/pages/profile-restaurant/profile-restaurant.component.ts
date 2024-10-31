import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OffreDescriptionComponent } from './offre-description/offre-description.component';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-profile-restaurant',
  // standalone: true,
  // imports: [
  //   MatIconModule,
  //   MatChipsModule,
  //   MatIconModule,
  //   MatToolbarModule,
  //   MatTabsModule,
  //   BrowserAnimationsModule
  // ],
  templateUrl: './profile-restaurant.component.html',
  styleUrl: './profile-restaurant.component.scss',
  animations: [
    trigger('slideToggle', [
      state('void', style({ height: '0px', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ])
  ]
})
export class ProfileRestaurantComponent {
  showTitle: boolean = true;
  showInfos: boolean=false;

  onTabChange(event: MatTabChangeEvent) {
    // Affiche le titre seulement quand l'onglet "Mes offres" est sélectionné
    this.showTitle = event.index === 1;
    this.showInfos = event.index === 0;
    // L'index 1 correspond au deuxième onglet }
  }
  showDescription = false;

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }

  jobList = [
    { title: 'Serveur H/F', typePoste: 'Temps partiel', lieu: 'Lyon', nombreCandidature: '20', datePublication: '20/12/2021' },
    { title: 'Cuisinier H/F', typePoste: 'Temps plein', lieu: 'Marseille', nombreCandidature: '15', datePublication: '15/11/2021' },
    { title: 'Responsable de salle H/F', typePoste: 'Temps partiel', lieu: 'Paris', nombreCandidature: '10', datePublication: '10/10/2021' },
    { title: 'Barman H/F', typePoste: 'Temps partiel', lieu: 'Nice', nombreCandidature: '25', datePublication: '05/09/2021' },
    { title: 'Chef de rang H/F', typePoste: 'Temps plein', lieu: 'Lyon', nombreCandidature: '30', datePublication: '01/08/2021' }
];

}
