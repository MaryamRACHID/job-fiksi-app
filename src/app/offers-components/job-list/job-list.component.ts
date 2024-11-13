import { Component, OnInit } from '@angular/core';
import { off } from 'process';
import { OffresService } from '../../offres.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit{
 offres : any[] = [];
 isLoading = true;
 errorMessage: string = '';
  constructor(private offresService: OffresService) {}

  ngOnInit(): void {
    this.offresService.getOffres()
    .then(data => {
      this.offres = data;
      this.isLoading = false;
    })
    .catch(error => {
      this.errorMessage = error.message;
      this.isLoading = false;
    });
  }
}
