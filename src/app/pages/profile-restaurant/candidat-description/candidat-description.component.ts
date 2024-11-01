import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRestaurantComponent } from '../profile-restaurant.component';
import { OffersComponentsModule } from '../../../offers-components/offers-components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-candidat-description',
  // standalone: true,
  // imports: [CommonModule, ],
  templateUrl: './candidat-description.component.html',
  styleUrl: './candidat-description.component.scss',
  animations: [
    trigger('slideToggle', [
      state('void', style({ height: '0px', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ])
  ]
})
export class CandidatDescriptionComponent {
  @Input() candidate!: { name: string; Cv:string; Email:string;Telephone:string;Disponibilite:string;_Statut:string };
  showCandidate: boolean=true;
  toggleDescriptionCandidate() {
    this.isOpen = !this.isOpen;
  }
  isOpen: any;
  // job: any;
  // candidate!: { name: string; experience: string; contact: string; };
  // showOffre: any;


}
