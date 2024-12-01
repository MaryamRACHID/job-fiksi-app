import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent {
  @Output() identityInfoChange = new EventEmitter<any>();

  @ViewChild('identityUploadInput') identityUploadInput!: ElementRef;
  @ViewChild('vitaleUploadInput') vitaleUploadInput!: ElementRef;

  @Input() userType: string | null = null;

  selectedIdentityFile: File | null = null;
  selectedVitaleFile: File | null = null;

  constructor(private http: HttpClient) {}

  // Handles file selection and stores the file information
  onFileChange(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (type === 'identity') {
        this.selectedIdentityFile = file;
        console.log('Identity file selected:', file);
      } else if (type === 'vitale') {
        this.selectedVitaleFile = file;
        console.log('Vitale file selected:', file);
      }
    }
  }
  // Save identity info (e.g., upload files to server)
  saveIdentity() {
    this.identityInfoChange.emit(this.userType);

    if (this.selectedIdentityFile || this.selectedVitaleFile) {
      const formData = new FormData();

      if (this.selectedIdentityFile) {
        formData.append('identity', this.selectedIdentityFile, this.selectedIdentityFile.name);
      }
      if (this.selectedVitaleFile) {
        formData.append('vitale', this.selectedVitaleFile, this.selectedVitaleFile.name);
      }

      // Replace with your actual API endpoint
      const apiUrl = 'https://jobfiksi.ismael-dev.com/api/candidats/profile/';  // L'URL avec la barre oblique

      this.http.post(apiUrl, formData).subscribe(
        response => {
          console.log('Identity files uploaded successfully:', response);
        },
        error => {
          console.error('Error uploading identity files:', error);
        }
      );
    } else {
      console.log('No files selected to upload.');
    }
  }
}
