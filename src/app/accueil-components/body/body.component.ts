import { Component, Input } from '@angular/core';
import {Candidat, Restaurant} from '../../pages/accueil/accueil.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Input() candidats: Candidat[] = [];
  @Input() restaurants: Restaurant[] = [];
  @Input() userType!: string | null;
}
