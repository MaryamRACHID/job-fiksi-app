import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  @Output() experienceInfoChange = new EventEmitter<any>();
  @Input() userType: string | null = null;

  experiences = [{ title: '', company: '', startDate: '', endDate: '' }];
  spokenLanguages: { french: boolean; english: boolean; other: string } = {
    french: false,
    english: false,
    other: ''
  };

  addExperience() {
    this.experiences.push({ title: '', company: '', startDate: '', endDate: '' });
  }

  save() {
    this.experienceInfoChange.emit({ experiences: this.experiences });
  }

  onExperienceUpdate() {
    this.experienceInfoChange.emit({ experiences: this.experiences });
    this.experienceInfoChange.emit(this.userType);

  }
}
