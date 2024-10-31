import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offre-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offre-description.component.html',
  styleUrl: './offre-description.component.scss'
})
export class OffreDescriptionComponent {
  @Input()
  job!: { title: string; typePoste: string, lieu: string, nombreCandidature: string, datePublication: string};
  isOpen: boolean = false;

  toggleDescription() {
    this.isOpen = !this.isOpen;
  }
}
