import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent  {
  @Input() contactInfo!: { phone: string, address: string, postalCode: string, city: string};
  @Output() contactInfoChange = new EventEmitter<any>();
  @Input() userType: string | null = null; // Propriété pour recevoir le type de profil

  ngOnInit() {
    // Affichez le type de profil dans la console lors de l'initialisation
    console.log('Type de profil:', this.userType);
  }

  contact = {
    phone: '',
    address: '',
    postalCode: '',
    city: ''
  };

  save() {
    this.contactInfoChange.emit(this.contact);
    this.contactInfoChange.emit(this.userType)
  }
}
