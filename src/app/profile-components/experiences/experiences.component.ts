import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  @Output() experienceInfoChange = new EventEmitter<any>();

  experiences = [{ title: '', company: '', startDate: '', endDate: '' }];

  addExperience() {
    this.experiences.push({ title: '', company: '', startDate: '', endDate: '' });
  }

  save() {
    this.experienceInfoChange.emit({ experiences: this.experiences });
  }
}
