import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  cvFile: File | null = null;
  coverLetterFile: File | null = null;
  otherDocumentFile: File | null = null;

  constructor(private http: HttpClient) {}

  // Handle file selection
  onFileChange(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(`${type} file selected:`, file);
      if (type === 'cv') {
        this.cvFile = file;
      } else if (type === 'coverLetter') {
        this.coverLetterFile = file;
      } else if (type === 'other') {
        this.otherDocumentFile = file;
      }
    }
  }

  // Save CV and related documents (upload to server)
  saveCV() {
    this.cvInfoChange.emit(this.userType);

    if (this.cvFile || this.coverLetterFile || this.otherDocumentFile) {
      const formData = new FormData();
      if (this.cvFile) formData.append('cv', this.cvFile, this.cvFile.name);
      if (this.coverLetterFile) formData.append('coverLetter', this.coverLetterFile, this.coverLetterFile.name);
      if (this.otherDocumentFile) formData.append('otherDocument', this.otherDocumentFile, this.otherDocumentFile.name);

      const apiUrl = 'https://your-api-endpoint.com/uploadCV'; // Replace with your actual API endpoint

      this.http.post(apiUrl, formData)
        .subscribe(
          response => {
            console.log('Files uploaded successfully:', response);
          },
          error => {
            console.error('Error uploading files:', error);
          }
        );
    } else {
      console.log('No files selected for upload.');
    }
  }
}
