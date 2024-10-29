import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-disponibilites',
  templateUrl: './disponibilites.component.html',
  styleUrl: './disponibilites.component.scss'
})
export class DisponibilitesComponent {
  @Output() referencesInfoChange = new EventEmitter<any>();

  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  availability: string[] = [];
  morning: boolean = false;
  afternoon: boolean = false;
  evening: boolean = false;

  save() {
    this.referencesInfoChange.emit({
      availability: this.availability,
      morning: this.morning,
      afternoon: this.afternoon,
      evening: this.evening
    });
  }
}
