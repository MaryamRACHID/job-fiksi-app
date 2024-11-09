import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  @Input() step: number = 1;
  @Output() previousStep = new EventEmitter<void>();
  @Output() skip = new EventEmitter<void>();

  goToPreviousStep() {
    this.previousStep.emit();
  }

  abandon() {
    this.skip.emit();
  }
}
