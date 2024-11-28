import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informations-resto',
  templateUrl: './informations-resto.component.html',
  styleUrl: './informations-resto.component.scss'
})
export class InformationsRestoComponent {
  @Input() infos!:any;
}
