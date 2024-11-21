import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent  {
  @Output() contactInfoChange = new EventEmitter<any>();

  contact = {
    phone: '',
    address: '',
    postalCode: '',
    city: ''
  };

  save() {
    this.contactInfoChange.emit(this.contact);
  }
}
