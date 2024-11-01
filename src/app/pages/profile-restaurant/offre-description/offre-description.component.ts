import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRestaurantComponent } from '../profile-restaurant.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Url } from 'url';

@Component({
  selector: 'app-offre-description',
  // standalone: true,
  // imports: [CommonModule, CandidatDescriptionComponent],
  templateUrl: './offre-description.component.html',
  styleUrl: './offre-description.component.scss',
  animations: [
    trigger('slideToggle', [
      state('void', style({ height: '0px', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ])
  ]
})
export class OffreDescriptionComponent {
  @Input()
  job!: { title: string; typePoste: string, lieu: string, nombreCandidature: string, datePublication: string, show:boolean,candidatures: { name: string; Cv:string, Email:string, Telephone:string, Disponibilite:string, _Statut:string}[]};
  isOpen: boolean = false;
  showDetails: boolean = false
  showApplications: boolean = false;
  showOffre:boolean=true;
  candidate : any;
  @Output() viewCandidatures = new EventEmitter<void>();

showCandidatures() {
  this.viewCandidatures.emit(); // Émettre l'événement pour afficher les candidatures
}
showCandidatureContainer: any;
  toggleDescription() {
    this.isOpen = !this.isOpen;
  }


  goBackToOffers() {
    this.showApplications = false;
    this.showOffre = true;

    // this.backToOffers.emit();
  }
}
