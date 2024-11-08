import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrl: './identity.component.scss'
})
export class IdentityComponent {
  @Output() identityInfoChange = new EventEmitter<any>();

  @ViewChild('identityUploadInput') identityUploadInput!: ElementRef;
  @ViewChild('vitaleUploadInput') vitaleUploadInput!: ElementRef;

  @Input() userType: string | null = null;

  onFileChange(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(`${type} file selected:`, file);
    }
  }

  onIdentityUpdate() {
    this.identityInfoChange.emit(this.userType);
    console.log(this.userType);
  }
}
