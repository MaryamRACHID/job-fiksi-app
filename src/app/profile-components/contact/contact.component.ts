import {Component, Output, EventEmitter, Input} from '@angular/core';

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

  onContactUpdate() {
    this.contactInfoChange.emit(this.contact);
    this.contactInfoChange.emit(this.userType);
  }
}
