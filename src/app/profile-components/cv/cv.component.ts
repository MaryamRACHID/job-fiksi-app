import {Component, ViewChild, ElementRef, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  @Output() cvInfoChange = new EventEmitter<any>();

  @ViewChild('cvUploadInput') cvUploadInput!: ElementRef;
  @ViewChild('coverLetterUploadInput') coverLetterUploadInput!: ElementRef;
  @ViewChild('otherDocUploadInput') otherDocUploadInput!: ElementRef;

  @Input() userType: string | null = null;

  onFileChange(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(`${type} file selected:`, file);
    }
  }

  onCvUpdate() {
    this.cvInfoChange.emit(this.userType);
  }
}
