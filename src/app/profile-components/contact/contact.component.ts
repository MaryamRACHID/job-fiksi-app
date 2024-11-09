import {Component, Output, EventEmitter, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent  {
  @Output() contactInfoChange = new EventEmitter<any>();

  @Input() contactInfo!: { phone: string, address: string, postalCode: string, city: string};
  @Input() userType: string | null = null; // Propriété pour recevoir le type de profil
  contact = {
    phone: '',
    address: '',
    postalCode: '',
    city: ''
  };

  constructor(private http: HttpClient) {}

  saveContact() {
    this.contactInfoChange.emit(this.userType);
    const apiUrl = 'https://your-api-endpoint.com/saveContact'; // Replace with your API endpoint

    this.http.post(apiUrl, this.contact)
      .subscribe(
        response => {
          console.log('Contact information saved successfully:', response);
        },
        error => {
          console.error('Error saving contact information:', error);
        }
      );
  }
}
