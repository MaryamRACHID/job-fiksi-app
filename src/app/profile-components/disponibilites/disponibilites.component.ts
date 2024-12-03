import { Component, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-disponibilites',
  templateUrl: './disponibilites.component.html',
  styleUrls: ['./disponibilites.component.scss']
})
export class DisponibilitesComponent {
  @Output() availabilityInfoChange = new EventEmitter<any>();
  @Input() userType: string | null = null;

  token: string | null = null;

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

  // Convertir timeSlots en tableau, comme days
  timeSlots: string[] = ['Matin', 'Apres-midi', 'Soir'];
  timeSlotsInfo: { [key: string]: boolean } = {
    'Matin': false,
    'Apres-midi': false,
    'Soir': false
  };

  constructor(private http: HttpClient) {}

  save() {
    this.availabilityInfoChange.emit({
      availability: Object.keys(this.availabilityInfo).filter(day => this.availabilityInfo[day]),
      timeSlots: this.timeSlots.filter(slot => this.timeSlotsInfo[slot])
    });
  }

  onDayChange(day: string) {
    this.availabilityInfo[day] = !this.availabilityInfo[day];
    this.emitChanges();
  }

  onTimeSlotChange(slot: string) {
    this.timeSlotsInfo[slot] = !this.timeSlotsInfo[slot];
    this.emitChanges();
  }

  emitChanges() {
    this.availabilityInfoChange.emit({
      availability: this.availabilityInfo,
      timeSlots: this.timeSlotsInfo
    });
  }

  saveDisponibilite() {
    const apiUrl = 'https://jobfiksi.ismael-dev.com/api/candidats/profile/';

    const formData = new FormData();

    const selectedDays = Object.keys(this.availabilityInfo).filter(day => this.availabilityInfo[day]);
    if (selectedDays.length > 0) {
      formData.append('disponibilite', JSON.stringify(selectedDays));
    }

    const selectedTimeSlots = this.timeSlots.filter(slot => this.timeSlotsInfo[slot]);
    if (selectedTimeSlots.length > 0) {
      formData.append('plages_horaires', JSON.stringify(selectedTimeSlots));
    }

    const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);

    this.http.put(apiUrl, formData, { headers }).subscribe(
      response => {
        console.log('Availability saved successfully:', response);
      },
      error => {
        console.error('Error saving availability:', error);
        //alert('Une erreur est survenue lors de l\'enregistrement des disponibilités.');
      }
    );
  }
}
