import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  selectedDate: Date | null = null;
  selectedInterviews: any[] = [];

  jobList = [
    {
      title: 'Serveur H/F',
      typePoste: 'Temps partiel',
      lieu: 'Lyon',
      nombreCandidature: '20',
      datePublication: '20/12/2021',
      show: false,
      candidatures: [
        { name: 'Alice Dupont', DateEntretien: '06/11/2024' },
        { name: 'Jean Martin', DateEntretien: '07/11/2024' },
        { name: 'Claire Bernard', DateEntretien: '08/11/2024' }
      ]
    },
    {
      title: 'Cuisinier',
      typePoste: 'Temps plein',
      lieu: 'Paris',
      nombreCandidature: '10',
      datePublication: '15/11/2021',
      show: false,
      candidatures: [
        { name: 'Isabelle Laurent', DateEntretien: '09/11/2024' },
        { name: 'Lucas Garnier', DateEntretien: '10/11/2024' },
        { name: 'Emma Roche', DateEntretien: '11/11/2024' }
      ]
    },
    // Other jobs...
  ];

  constructor() {}

  ngOnInit(): void {}

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const dateString = cellDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
      return this.hasInterviewOnDate(dateString) ? 'highlight-date' : '';
    }
    return '';
  };

  hasInterviewOnDate(dateString: string): boolean {
    return this.jobList.some(job =>
      job.candidatures.some(cand => cand.DateEntretien === dateString)
    );
  }

  onDateSelected(date: Date | null): void {
    if (date) {
      const dateString = date.toISOString().split('T')[0];
      this.selectedInterviews = this.jobList
        .flatMap(job => job.candidatures
          .filter(cand => cand.DateEntretien === dateString)
          .map(cand => ({
            name: cand.name,
            jobTitle: job.title,
            dateEntretien: cand.DateEntretien
          }))
        );
    } else {
      this.selectedInterviews = [];
    }
  }
}
