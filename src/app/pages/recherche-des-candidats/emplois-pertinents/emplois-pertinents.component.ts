import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplois-pertinents',
  templateUrl: './emplois-pertinents.component.html',
  styleUrl: './emplois-pertinents.component.scss'
})
export class EmploisPertinentsComponent {

  @Input() details:any;
  @Output() viewDetails = new EventEmitter<void>();
  isSelected: boolean = false;
  constructor(private router: Router) {}

  toggleSelection() {
    this.isSelected = !this.isSelected; // Change l'état entre true et false
  }
  showPosteDetails() {
    this.router.navigate(['/details'], { queryParams: this.details });
  }
}
