import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-emplois-resto',
  templateUrl: './emplois-resto.component.html',
  styleUrl: './emplois-resto.component.scss'
})
export class EmploisRestoComponent {
  @Input() details!:any;
}
