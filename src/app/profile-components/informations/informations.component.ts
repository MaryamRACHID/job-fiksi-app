import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss'
})
export class InformationsComponent {
  @Output() personalInfoChange = new EventEmitter<any>();

  @Input() personalInfo!: { name: string; firstName: string; birthDate: string };
  @Input() userType: string | null = null;


  onInfoUpdate() {
    this.personalInfoChange.emit(this.personalInfo);
    this.personalInfoChange.emit(this.userType)
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('File selected:', file);
    }
  }
}
