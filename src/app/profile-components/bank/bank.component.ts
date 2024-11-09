import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {
  @Output() bankInfoChange = new EventEmitter<any>();

  @ViewChild('otherDocUploadInput') otherDocUploadInput!: ElementRef;

  @Input() userType: string | null = null;

  otherDocFile: File | null = null;

  constructor(private http: HttpClient) {}

  // Handle file selection for bank-related document
  onFileChange(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(`${type} file selected:`, file);
      if (type === 'bank') {
        this.otherDocFile = file;
      }
    }
  }

  // Save bank-related document (upload to server)
  saveBank() {
    this.bankInfoChange.emit(this.userType);

    if (this.otherDocFile) {
      const formData = new FormData();
      formData.append('otherDoc', this.otherDocFile, this.otherDocFile.name);

      const apiUrl = 'https://your-api-endpoint.com/uploadBankDoc'; // Replace with your actual API endpoint

      this.http.post(apiUrl, formData)
        .subscribe(
          response => {
            console.log('Bank document uploaded successfully:', response);
          },
          error => {
            console.error('Error uploading bank document:', error);
          }
        );
    } else {
      console.log('No file selected for upload.');
    }
  }
}
