import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {
  @Input() acceuil: string = '';
  @Input() favorie: string = '';
  @Input() posteoucandidature: string = '';
  @Input() messagerie: string = '';
  @Input() profil: string = '';
}
