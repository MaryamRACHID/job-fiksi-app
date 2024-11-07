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
  availabilityInfo: { [key: string]: boolean } = {
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
      availability: Object.keys(this.availabilityInfo).filter(day => this.availabilityInfo[day]),
      morning: this.morning,
      afternoon: this.afternoon,
      evening: this.evening
    });
  }

  // Méthode pour gérer le changement de jour
  onDayChange(day: string) {
    this.availabilityInfo[day] = !this.availabilityInfo[day];
    this.availabilityInfoChange.emit({
      availability: this.availabilityInfo,
      morning: this.morning,
      afternoon: this.afternoon,
      evening: this.evening
    });
  }

  onDisponibiliteUpdate() {
    this.availabilityInfoChange.emit({
      availability: Object.keys(this.availabilityInfo).filter(day => this.availabilityInfo[day]),
      morning: this.morning,
      afternoon: this.afternoon,
      evening: this.evening
    });
  }
}
