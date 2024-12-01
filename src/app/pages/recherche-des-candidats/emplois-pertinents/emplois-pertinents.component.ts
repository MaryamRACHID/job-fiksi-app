import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-emplois-pertinents',
  templateUrl: './emplois-pertinents.component.html',
  styleUrl: './emplois-pertinents.component.scss'
})
export class EmploisPertinentsComponent {
  @Input() details:any;
  isSelected: boolean = false;

  toggleSelection() {
    this.isSelected = !this.isSelected; // Change l'état entre true et false
  }
}
