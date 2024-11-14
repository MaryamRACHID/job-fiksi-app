import { Component, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-disponibilites',
  templateUrl: './disponibilites.component.html',
  styleUrls: ['./disponibilites.component.scss']
})
export class DisponibilitesComponent {
  @Output() availabilityInfoChange = new EventEmitter<any>();
  @Input() userType: string | null = null;

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

  constructor(private http: HttpClient) {}

  save() {
    this.availabilityInfoChange.emit({
      availability: Object.keys(this.availabilityInfo).filter(day => this.availabilityInfo[day]),
      morning: this.morning,
      afternoon: this.afternoon,
      evening: this.evening
    });
  }

  onDayChange(day: string) {
    this.availabilityInfo[day] = !this.availabilityInfo[day];
    this.availabilityInfoChange.emit({
      availability: this.availabilityInfo,
      morning: this.morning,
      afternoon: this.afternoon,
      evening: this.evening
    });
  }

  saveDisponibilite() {
    this.availabilityInfoChange.emit(this.userType);
    const apiUrl = 'https://your-api-endpoint.com/saveDisponibilite'; // Replace with your API endpoint

    const availabilityPayload = {
      availability: Object.keys(this.availabilityInfo).filter(day => this.availabilityInfo[day]),
      morning: this.morning,
      afternoon: this.afternoon,
      evening: this.evening
    };

    this.http.post(apiUrl, availabilityPayload)
      .subscribe(
        response => {
          console.log('Availability saved successfully:', response);
        },
        error => {
          console.error('Error saving availability:', error);
        }
      );
  }
}
