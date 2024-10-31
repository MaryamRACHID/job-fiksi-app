import {Component, ViewChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  @ViewChild('cvUploadInput') cvUploadInput!: ElementRef;
  @ViewChild('coverLetterUploadInput') coverLetterUploadInput!: ElementRef;
  @ViewChild('otherDocUploadInput') otherDocUploadInput!: ElementRef;
  @Input() userType: string | null = null; // Propriété pour recevoir le type de profil


  onFileChange(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(`${type} file selected:`, file);
    }
  }
}
