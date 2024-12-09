import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  isSelected: boolean = false;
  toggleSelection() {
    this.isSelected = !this.isSelected; // Change l'état entre true et false
  }
}
