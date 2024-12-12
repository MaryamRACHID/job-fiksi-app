import { Component, Input, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent{
  @Input() jobList: any[] = []; // jobList input from parent component
  currentMonth = new Date();
  selectedDate: Date | null = null;
  weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  get datesInMonth(): Date[] {
    const dates = [];
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
      dates.push(new Date(year, month, day));
    }
    return dates;
  }

  isInterviewDate(date: Date): boolean {
    return this.jobList.some(job =>
      job.candidatures.some((candidate: { DateEntretien: string; }) =>
        candidate.DateEntretien === date.toISOString().split('T')[0]
        // console.log(date.toISOString().split('T')[0], candidate.DateEntretien)
      )
    );
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
  }

  get selectedInterviews() {
    if (!this.selectedDate) return [];
    const selectedDateString = this.selectedDate.toISOString().split('T')[0];
    console.log(selectedDateString);
    return this.jobList
      // console.log(candidate.DateEntretien);
      .flatMap(job => job.candidatures)
      .filter(candidate => candidate.DateEntretien === selectedDateString);
      // console.log(candidate.DateEntretien);
  }

  previousMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    this.currentMonth = new Date(this.currentMonth);
  }

  nextMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    this.currentMonth = new Date(this.currentMonth);
  }
}
