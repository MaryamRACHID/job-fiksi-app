import { Component, OnInit } from '@angular/core';
import { OffresService } from '../../offres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent implements OnInit{
  offre : any;
  isLoading = true;
  errorMessage: string = '';
  constructor(
    private route : ActivatedRoute,
    private offresService: OffresService
  ) {}

  ngOnInit(): void {
     const id = Number(this.route.snapshot.paramMap.get('id'));
     this.offresService.getOffre(id)
      .then(data => {
        this.offre = data;
        this.isLoading = false;
      }).catch(error => {
        this.errorMessage = error.message;
        this.isLoading = false;
      });
  }

}
