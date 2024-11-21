import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
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
