import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-choose-slot',
  templateUrl: './choose-slot.component.html',
  styleUrl: './choose-slot.component.scss'
})
export class ChooseSlotComponent {
  selectedDate: Date = new Date(); // Date sélectionnée par défaut : aujourd'hui
  startTime: string = '';
  endTime: string = '';

  constructor(private router: Router) {}

  saveSlot() {
    console.log('Date sélectionnée:', this.selectedDate);
    console.log('Heure de début:', this.startTime);
    console.log('Heure de fin:', this.endTime);
    this.router.navigate(['/addPost/interviewSlots']);
  }

  goToNextStep() {
    this.router.navigate(['/addPost/jobAvantages']);
  }

  goToPreviousStep() {
    this.router.navigate(['/addPost/interviewSlots']);
  }
}
