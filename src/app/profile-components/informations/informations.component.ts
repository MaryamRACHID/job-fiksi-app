import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss'
})
export class InformationsComponent {
  @Input() personalInfo!: { name: string; firstName: string; birthDate: string };
  @Output() personalInfoChange = new EventEmitter<any>();
  @Output() next = new EventEmitter<void>();

    // Emit the updated personalInfo object to the parent component
    updateInfo() {
    this.personalInfoChange.emit(this.personalInfo);
  }

  goToNextStep() {
  this.updateInfo();
  this.next.emit();
}
}
