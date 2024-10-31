import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-disponibilites',
  templateUrl: './disponibilites.component.html',
  styleUrls: ['./disponibilites.component.scss']
})
export class DisponibilitesComponent {
  @Output() availabilityInfoChange = new EventEmitter<any>();
  @Input() userType: string | null = null; // Propriété pour recevoir le type de profil

  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  availability: { [key: string]: boolean } = {
    'Lundi': false,
    'Mardi': false,
    'Mercredi': false,
    'Jeudi': false,
    'Vendredi': false,
    'Samedi': false,
    'Dimanche': false
  };
  morning: boolean = false;
  afternoon: boolean = false;
  evening: boolean = false;

  // Appelle cette méthode pour émettre les données
  save() {
    this.availabilityInfoChange.emit({
      availability: Object.keys(this.availability).filter(day => this.availability[day]),
      morning: this.morning,
      afternoon: this.afternoon,
      evening: this.evening
    });
  }

  // Méthode pour gérer le changement de jour
  onDayChange(day: string) {
    this.availability[day] = !this.availability[day];

    // Emit the availability change
    this.availabilityInfoChange.emit({
      availability: this.availability,
      morning: this.morning,
      afternoon: this.afternoon,
      evening: this.evening
    });
  }
}
